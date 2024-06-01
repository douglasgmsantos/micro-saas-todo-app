import React from "react";

import { auth } from "../../services/auth";
import UserInfo from "./_components/user-info";

export default async function AppHome() {
  const session = await auth();

  return (
    <main className="flex items-center justify-center h-screen">
      <UserInfo user={session?.user} />
    </main>
  );
}
