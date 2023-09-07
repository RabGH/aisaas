"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { aiTools } from "@/constants";

const tools = aiTools;

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          AI Companion Applications
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat and use AI to help you with your daily tasks and projects
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between 
            hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className={cn("w-5 h-5", tool.color)} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
