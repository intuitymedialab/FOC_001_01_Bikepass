import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

/* add in your protected routes here */

export const config = {
  matcher: [],
};
