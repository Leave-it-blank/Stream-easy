import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // here we can configure the routes
  publicRoutes: ["/", "/api/webhooks(.*)"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
