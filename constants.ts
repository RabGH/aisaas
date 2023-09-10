import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const aiTools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

export const aiRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export const landingFeatures = [
  {
    name: "OpenAI",
    icon: MessageSquare,
    title: "Conversation bot",
    description:
      "Engage in natural, human-like conversations with our AI assistant. Get answers, chat, and interact seamlessly.",
  },
  {
    name: "OpenAI",
    icon: Code,
    title: "Code bot",
    description:
      "Accelerate your coding process with our AI-powered code completion tool. Write code faster and more efficiently.",
  },
  {
    name: "OpenAI",
    icon: ImageIcon,
    title: "Image Bot",
    description:
      "Generate stunning images and graphics effortlessly with the help of our AI-powered image generator.",
  },
  {
    name: "Replicate",
    icon: Music,
    title: "Music Bot",
    description:
      "Create music like never before. Our AI music bot can compose melodies and tunes tailored to your preferences.",
  },
  {
    name: "Replicate",
    icon: VideoIcon,
    title: "Video Bot",
    description:
      "Produce captivating videos with ease. Our AI video bot can help you create engaging visual content.",
  },
];
