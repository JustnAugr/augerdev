'use client';

import { EnvelopeIcon, MoonIcon, BriefcaseIcon, CommandLineIcon, DocumentTextIcon, SunIcon } from "@heroicons/react/24/outline";
import Nata from "./nata";
import Title from "./title";
import { Schibsted_Grotesk } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const grotesk = Schibsted_Grotesk({ subsets: ["latin"], weight: '400' });
const groteskBold = Schibsted_Grotesk({ subsets: ["latin"], weight: '700' });

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();

  const [hoverText, setHoverText] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className={grotesk.className}>
      <main className="bg-slate-50 px-10 bg-gradient-to-b to-white from-teal-50 dark:to-stone-800 dark:from-stone-900">
        <section className="flex min-h-svh flex-col">
          <div className="pt-5 md:pt-10 mb-5 md:mb-12 flex justify-between">
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
          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col justify-center text-center max-md:pt-0">
              <Nata />
              <div className="order-1 relative z-0 top-10 transition ease-in-out duration-500 peer-has-[:hover]:-translate-y-10">
                click on Nata for a surprise!
              </div>
              <h2 className={`order-3 text-3xl md:text-5xl lg:text-5xl md:py-2 pb-2 md:pb-4 text-teal-800 ${groteskBold.className} dark:text-emerald-400`}>Justin Auger</h2>
              <Title />
              <div className="order-4 flex justify-center gap-10 pt-5 text-gray-800">
                <Link href="mailto:justin@auger.dev">
                  <EnvelopeIcon
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                    aria-valuetext="email me"
                    onMouseEnter={() => setHoverText('Send me an email')}
                    onMouseLeave={() => setHoverText('')}
                  />
                </Link>
                <Link href="/resume.pdf">
                  <DocumentTextIcon
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                    aria-valuetext="resume"
                    onMouseEnter={() => setHoverText('Check out my resume')}
                    onMouseLeave={() => setHoverText('')}
                  />
                </Link>
                <Link href="https://www.linkedin.com/in/justinauger/">
                  <BriefcaseIcon
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                    aria-valuetext="linkedin"
                    onMouseEnter={() => setHoverText('Find me on LinkedIn')}
                    onMouseLeave={() => setHoverText('')}
                  />
                </Link>
                <Link href="https://github.com/JustnAugr">
                  <CommandLineIcon
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                    aria-valuetext="github"
                    onMouseEnter={() => setHoverText('Critique my GitHub projects')}
                    onMouseLeave={() => setHoverText('')}
                  />
                </Link>
              </div>
              {/* sadly not using peer here as I want to set the hover text and peer-has-a[:hover] won't tell me which one I'm hovering over */}
              {hoverText && <div className='order-5 flex justify-center pt-5 text-teal-800 dark:text-emerald-400'>
                {hoverText}
              </div>}
            </div>
            <div className="flex justify-center pb-5">
              <p className="text-sm text-gray-700 dark:text-stone-400">
                thanks for stoppin' by
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
