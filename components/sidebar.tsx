"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import FreeCounter from "@/components/free-counter";
import { aiRoutes } from "@/constants";

const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

const routes = aiRoutes;

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const SideBar = ({ apiLimitCount = 0, isPro = false }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-14 h-14 mr-2">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Ai Companion
          </h1>
        </Link>
        {/* Sidebar Links */}
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              className={cn(
                `text-sm group flex p-3 w-full justify-start font-medium cursor-pointer 
              hover:text-white hover:bg-white/10 rounded-lg transition`,
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
              href={route.href}
              key={route.href}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Free Counter */}
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default SideBar;
