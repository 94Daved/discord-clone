import { getAuth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";

import { db } from "@/lib/db";

export const currentProfilePages = (req: NextApiRequest) => {
  const { userId } = getAuth(req);

  if (!userId) return null;

  const profile = db.profile.findUnique({ where: { userId: userId } });

  return profile;
};
