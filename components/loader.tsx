import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-12 h-12 relative animate-spin rounded-full">
        <Image alt="loader" fill src="/loading.svg" />
      </div>
      <p className="text-sm">Companion is thinking...</p>
    </div>
  );
};

export default Loader;
