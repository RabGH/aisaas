"use client";

import { useMount } from "@/hooks/mount-hook";

interface FreeCounterProps {
  apiLimitCount: number;
}

const FreeCounter = ({ apiLimitCount }: FreeCounterProps) => {
  const isMounted = useMount();
  if (!isMounted) return null;
  return <div></div>;
};

export default FreeCounter;
