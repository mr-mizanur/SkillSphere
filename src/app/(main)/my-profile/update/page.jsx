"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
    const { data: session } = authClient.useSession();
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const router = useRouter();


    useEffect(() => {
        if (session?.user) {
            setName(session.user.name || "");
            setPhotoURL(session.user.image || "");
        }
    }, [session]);

    
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
           
            const { error } = await authClient.updateUser({
                name: name,
                image: photoURL,
            });

            if (error) {
                alert(error.message);
                return;
            }

            alert("Profile updated successfully!");
            router.push("/my-profile");
        } catch (err) {
            console.error("Update failed:", err);
            alert("An unexpected error occurred.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-2xl">
                <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">Update Profile</h2>
           
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-600 outline-none text-gray-900"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Image URL</label>
                        <input 
                            type="text" 
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-600 outline-none text-gray-900"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full py-5 bg-purple-600 text-white font-bold rounded-2xl hover:bg-gray-900 transition-all shadow-xl shadow-purple-100">
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;