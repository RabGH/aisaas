import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

import { increaseApiLimit, checkApiLimit } from "@/util/api-limit";
import { checkSubscription } from "@/util/subscription";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY_KEY });

const instructionMessage: OpenAI.Chat.ChatCompletionMessage = {
  role: "system",
  content: `You are a code generator. You must answer only in markdown code snippets. 
  Use code comments for explanations.`,
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not set.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("No messages", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial limit reached.", { status: 403 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    if (!isPro) {
      await increaseApiLimit();
    }

    return NextResponse.json(response.choices[0].message, { status: 200 });
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
