import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { InitialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const setupPage = async () => {
  const profile = await InitialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <InitialModal />;
};

export default setupPage;
