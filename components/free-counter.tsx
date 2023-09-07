"use client";

import { useMount } from "@/hooks/mount-hook";
import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/constants";

interface FreeCounterProps {
  apiLimitCount: number;
}

const FreeCounter = ({ apiLimitCount }: FreeCounterProps) => {
  const isMounted = useMount();
  if (!isMounted) return null;
  return <div className="px-3">
    <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
            <div className="text-center text-sm text-white mb-4 space-y-2">
                <p>
                    {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
                </p>
            </div>
        </CardContent>
    </Card>
  </div>;
};

export default FreeCounter;
