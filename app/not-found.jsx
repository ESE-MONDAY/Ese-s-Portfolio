"use client"
import Link from 'next/link';
import Crying from '../public/Crying.json';
import Lottie from 'lottie-react';
 
export default function NotFound() {
  return (
    <div className='w-full max-w-[1440px] h-screen mx-auto text-white bg-[#111111]'>

        <main className="flex h-full flex-col items-center justify-center gap-2 px-8 ">
            <Lottie options={{animationData: Crying, loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid slice'}}} height={200} width={200} />
            
              <p>Oops! . The page you&apos;re looking for might have ventured off on its own adventure</p>
              <Link
                href="/"
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
              >
                Go Home
              </Link>
            </main>
    </div>
   
  );
}