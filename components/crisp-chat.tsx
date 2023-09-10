"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("72d91c54-c475-4109-a6d5-15dda77e2101");
  }, []);

  return null
};
