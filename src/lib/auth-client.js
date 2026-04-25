import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
});

// সরাসরি authClient থেকেই মেথডগুলো এক্সপোর্ট করো
export const { signIn, signUp, useSession } = authClient;