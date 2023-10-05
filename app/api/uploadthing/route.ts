import { createNextRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./code";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});
