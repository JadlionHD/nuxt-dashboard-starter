import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env"
});

export default defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: ["./server/schemas/index.ts"],
  dbCredentials: {
    url: process.env.NUXT_API_DATABASE_URL!
  },
  strict: false,
  verbose: true
});
