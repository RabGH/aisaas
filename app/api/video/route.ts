import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN! });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!replicate.auth) {
      return new NextResponse("Replicate API Key not set.", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required.", { status: 400 });
    }

    const response = await replicate.run(
      "andreasjansson/stable-diffusion-animation:ca1f5e306e5721e19c473e0d094e6603f0456fe759c10715fcd6c1b79242d4a5",
      {
        input: {
          prompt: prompt,
        },
      }
    );

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log("[VIDEO_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
