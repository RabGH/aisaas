import Heading from "@/components/heading";
import { Settings } from "lucide-react";

const SettingsPage = async () => {
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-muted-foreground">
          Still in progress
        </h2>
      </div>
    </div>
  );
};

export default SettingsPage;
