import { createAuthClient } from "better-auth/vue";
import { adminClient, apiKeyClient, emailOTPClient, usernameClient } from "better-auth/client/plugins";
import { ac, admin, user } from "~~/shared/auth/permissions";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  // baseURL: import.meta.env.NUXT_PUBLIC_BETTER_AUTH_URL,

  plugins: [
    usernameClient(),
    adminClient({
      ac,
      roles: {
        admin,
        user
      }
    }),
    apiKeyClient(),
    emailOTPClient()
  ]
});
