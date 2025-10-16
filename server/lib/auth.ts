import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { username, admin as adminPlugin, captcha, emailOTP, apiKey } from "better-auth/plugins";
import * as schema from "~~/server/schemas";
import { ac, admin, user } from "~~/shared/auth/permissions";

export const tables = schema;

export const auth = betterAuth({
  database: drizzleAdapter(drizzle({ client: postgres(process.env.DATABASE_URL!) }), {
    provider: "pg",
    schema: {
      ...tables
    }
  }),
  plugins: [
    username(),
    adminPlugin({
      ac,
      roles: {
        admin,
        user
      }
    }),
    apiKey(),
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        // Implement the sendVerificationOTP method to send the OTP to the user's email address
      }
    }),
    captcha({
      provider: "cloudflare-turnstile", // or google-recaptcha, hcaptcha
      secretKey: process.env.CLOUDFLARE_SECRET_KEY || "1x0000000000000000000000000000000AA"
    })
  ],
  emailAndPassword: {
    enabled: true,
    autoSignIn: true
  },
  socialProviders: {
    // github: {
    //   clientId: "123",
    //   clientSecret: "123"
    // }
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // Expires in 7 days
    updateAge: 60 * 60 * 24 // 1 day (every 1 day the session expiration is updated)
    // cookieCache: {
    //   enabled: true,
    //   maxAge: 5 * 60, // cache duration in seconds
    // },
  },
  trustedOrigins: ["http://localhost:3000"]
});
