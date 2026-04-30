"use client";
import { authClient } from "@/lib/auth-client"; 
import Link from "next/link";

const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) return <div className="text-center mt-20">Loading...</div>;

    return (
        <div className="min-h-screen py-12 bg-gray-50">
            <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
                <div className="h-32 bg-purple-600"></div>
                <div className="px-6 pb-8 text-center">
                    <img 
                        src={session?.user?.image || "https://via.placeholder.com/150"} 
                        className="w-32 h-32 rounded-full border-4 border-white mx-auto -mt-16 object-cover shadow-md"
                        alt="Profile"
                    />
                    <h1 className="text-2xl font-bold mt-4 text-gray-800">{session?.user?.name}</h1>
                    <p className="text-gray-500 mb-6">{session?.user?.email}</p>
                    
                    <Link 
                        href="/my-profile/update" 
                        className="block w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-purple-600 transition-all duration-300 shadow-lg"
                    >
                        Update Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;