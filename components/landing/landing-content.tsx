"use client";

import { landingFeatures } from "@/constants";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = landingFeatures;

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl text-white font-extrabold mb-2">Features</h2>
        <p className="text-zinc-400 text-xs md:text-sm font-normal">
          Still in Alpha.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="p-2 w-fit rounded-md bg-muted-foreground/10">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
