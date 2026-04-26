import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    // এখন এটি সঠিকভাবে আপনার .env থেকে URL টি খুঁজে পাবে
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000"
});

export const { signIn, signUp, useSession } = authClient;