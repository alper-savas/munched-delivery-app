import React from "react";
import UserProfile from "@/components/profile/user-profile";
import { getServerSession } from "next-auth/react";

const index = () => {
  return <UserProfile />;
};

export default index;
