import { UserButton } from "@clerk/nextjs";

const LandingPage = () => {
  return (
    <>
      <UserButton afterSignOutUrl="/" />
      <div>Landing Page (Unprotected)</div>
    </>
  );
};

export default LandingPage;
