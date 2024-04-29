'use client';

import { EnvelopeIcon, MoonIcon, BriefcaseIcon, CommandLineIcon, DocumentTextIcon, SunIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const interBold = Inter({ subsets: ["latin"], weight: '700' });

export default function Home() {
  const [hoverText, setHoverText] = useState('');
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div>
      <main className="bg-slate-50 px-10 bg-gradient-to-b to-white from-teal-50 dark:to-stone-800 dark:from-stone-900">
        <section className="min-h-screen">
          <div className="py-10 mb-12 flex justify-between">
            <div className="flex">
              <h1>justin</h1>
              <h1 className="text-teal-800 dark:text-emerald-400">@</h1>
              <h1>auger.dev</h1>
            </div>
            {
              !mounted ?
                <></>
                :
                resolvedTheme === 'dark' ?
                  (<SunIcon className="w-8 h-8 cursor-pointer text-white" onClick={() => setTheme('light')} />)
                  :
                  (<MoonIcon className="w-8 h-8 cursor-pointer" onClick={() => setTheme('dark')} />)
            }
          </div>
          <div className="text-center pt-10">
            <div className="flex justify-center py-5">
              <Image
                className="rounded-3xl"
                src={"/surprise.jpg"}
                alt="Photo of Justin (that's me, the narrator), looking fantastic"
                width="250"
                height="250"
              />
            </div>
            <h2 className={`text-5xl py-2 text-teal-800 ${interBold.className} dark:text-emerald-400`}>Justin Auger</h2>
            <h3 className="text-2xl py-2 pb-2 dark:text-white">Software Engineer</h3>
            {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Hi, my name's Justin and I'm a SWE based in NYC
            </p> */}
          </div>
          <div className="flex justify-center gap-10 pt-5 text-gray-800">
            <Link href="mailto:justin@auger.dev">
              <EnvelopeIcon
                className="w-10 h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                aria-valuetext="email me"
                onMouseEnter={() => setHoverText('Send me an email')}
                onMouseLeave={() => setHoverText('')}
              />
            </Link>
            <Link href="/resume.pdf">
              <DocumentTextIcon
                className="w-10 h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                aria-valuetext="resume"
                onMouseEnter={() => setHoverText('Check out my resume')}
                onMouseLeave={() => setHoverText('')}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/justinauger/">
              <BriefcaseIcon
                className="w-10 h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                aria-valuetext="linkedin"
                onMouseEnter={() => setHoverText('Find me on LinkedIn')}
                onMouseLeave={() => setHoverText('')}
              />
            </Link>
            <Link href="https://github.com/JustnAugr">
              <CommandLineIcon
                className="w-10 h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                aria-valuetext="github"
                onMouseEnter={() => setHoverText('Critique my GitHub projects')}
                onMouseLeave={() => setHoverText('')}
              />
            </Link>
          </div>
          {hoverText && <div className='flex justify-center p-5 text-teal-800 dark:text-emerald-400'>
            {hoverText}
          </div>}
        </section>
      </main>
    </div>
  );
}
