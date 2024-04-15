import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
// here we can configure the routes

});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};