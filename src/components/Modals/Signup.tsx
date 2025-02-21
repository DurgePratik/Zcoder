import { auth, firestore } from '@/firebase/firebase';
import { setDoc, doc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SignupProps {
    onLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({ onLogin }) => {
    const [inputs, setInputs] = useState({ email: '', displayName: '', password: '' });
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const router = useRouter();

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password || !inputs.displayName) {
            toast.error("Please fill in all fields!");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser) return;

            const userData = {
                uid: newUser.user.uid,
                email: newUser.user.email,
                displayName: inputs.displayName,
                createdAt: Date.now(),
                updatedAt: Date.now(),
                solvedProblems: []
            };

            await setDoc(doc(firestore, "users", newUser.user.uid), userData);

            toast.success("Registration successful!", {
                onClose: () => router.push('/')
            });

        } catch (err) {
            console.error("Signup error:", err);
            toast.error("Signup failed! Please try again.");
        }
    };

    useEffect(() => {
        if (error) toast.error(error.message);
    }, [error]);

    return (
        <div className="space-y-6 p-10">
            <ToastContainer position="top-right" autoClose={3000} />
            <h1 className="font-sans text-xl font-semibold">Register to Zcoder</h1>

            <form onSubmit={handleRegister} className="space-y-4">
                <h2 className="font-sans">Your email</h2>
                <input
                    onChange={handleChangeInput}
                    type="email"
                    name="email"
                    value={inputs.email}
                    placeholder="Enter your email"
                    className="border-2 outline-none sm:text-sm rounded-lg border-gray-500 placeholder-gray-400 h-10 w-full"
                />

                <h2 className="font-sans">Display Name</h2>
                <input
                    onChange={handleChangeInput}
                    type="text"
                    name="displayName"
                    value={inputs.displayName}
                    placeholder="Name"
                    className="border-2 outline-none sm:text-sm rounded-lg border-gray-500 placeholder-gray-400 h-10 w-full"
                />

                <h2 className="font-sans">Password</h2>
                <input
                    onChange={handleChangeInput}
                    type="password"
                    name="password"
                    value={inputs.password}
                    placeholder="Type your Password"
                    className="border-2 outline-none sm:text-sm rounded-lg border-gray-500 placeholder-gray-400 h-10 w-full"
                />

                <Link href='/'><button
                    type="submit"
                    className="border-2 outline-none sm:text-sm rounded-lg bg-[#131538] text-white h-10 w-full mt-6"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button></Link>
            </form>

            <p className="mt-4 text-center">
                Already have an account? <span className="text-blue-600 cursor-pointer" onClick={onLogin}>Log In</span>
            </p>
        </div>
    );
};

export default Signup;
