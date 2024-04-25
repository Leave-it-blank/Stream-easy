import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // here we can configure the routes
  publicRoutes: ["/", "/api/webhooks(.*)",
  "/api/uploadthing",
  "/:username",
  "/search",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
