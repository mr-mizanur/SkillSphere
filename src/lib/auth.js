import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db(); // ডিফল্ট ডেটাবেস নেবে অথবা নাম দিতে পারো

export const auth = betterAuth({
  database: mongodbAdapter(db), // এখানে দ্বিতীয় প্যারামিটারে আলাদা করে ক্লায়েন্ট দেওয়ার দরকার নেই যদি db অবজেক্ট দাও
  emailAndPassword: { 
    enabled: true, 
  },
});