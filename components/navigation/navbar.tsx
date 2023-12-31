import { UserButton } from "@clerk/nextjs";

import MobileSidebar from "@/components/navigation/mobile-sidebar";
import { getApiLimitCount } from "@/util/api-limit";
import { checkSubscription } from "@/util/subscription";

const Navbar = async () => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
