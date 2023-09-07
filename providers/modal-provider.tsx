"use client";

import ProModal from "@/components/pro-modal";
import { useMount } from "@/hooks/mount-hook";

export const ModalProvider = () => {
  const isMounted = useMount();
  if (!isMounted) return null;

  return (
    <>
      <ProModal />
    </>
  );
};
