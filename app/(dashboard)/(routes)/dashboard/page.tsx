import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <p>Dashboard Page (Protected)</p>
    </div>
  );
};

export default DashboardPage;
