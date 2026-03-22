import {
  EnvelopeIcon,
  MoonIcon,
  BriefcaseIcon,
  CommandLineIcon,
  DocumentTextIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Nata from "./components/Nata";
import Title from "./components/Title";

function App() {
  const [hoverText, setHoverText] = useState("");

  function switchTheme() {
    document.getElementById("theme-toggle-to-light")?.classList.toggle("hidden");
    document.getElementById("theme-toggle-to-dark")?.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.getElementById("theme-toggle-to-light")?.classList.remove("hidden");
    } else {
      document.getElementById("theme-toggle-to-dark")?.classList.remove("hidden");
    }
  }, []);

  return (
    <>
      <main className="bg-slate-50 px-10 bg-linear-to-b to-white from-teal-50 dark:to-stone-800 dark:from-stone-900">
        <section className="flex min-h-svh flex-col">
          <div className="pt-5 md:pt-10 mb-5 md:mb-12 flex justify-between">
            <div className="flex">
              <h1 className="dark:text-white">justin</h1>
              <h1 className="text-teal-800 dark:text-emerald-400">@</h1>
              <h1 className="dark:text-white">auger.dev</h1>
            </div>
            <div>
              <SunIcon
                id="theme-toggle-to-light"
                className="w-8 h-8 cursor-pointer text-white hidden"
                onClick={() => switchTheme()}
              />
              <MoonIcon
                id="theme-toggle-to-dark"
                className="w-8 h-8 cursor-pointer hidden"
                onClick={() => switchTheme()}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div className="flex flex-col justify-center text-center max-md:pt-0">
              <Nata />
              <div className="order-1 relative z-0 top-10 transition ease-in-out duration-500 peer-has-[:hover]:-translate-y-10">
                click on Nata for a surprise!
              </div>
              <h2
                className={`order-3 text-3xl md:text-5xl lg:text-5xl md:py-2 pb-2 md:pb-4 text-teal-800 dark:text-emerald-400`}
              >
                Justin Auger
              </h2>
              <Title />
              <div className="order-4 flex justify-center gap-10 pt-5 text-gray-800">
                <a href="mailto:justin@auger.dev">
                  <EnvelopeIcon
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                    aria-valuetext="email me"
                    onMouseEnter={() => setHoverText("Send me an email")}
                    onMouseLeave={() => setHoverText("")}
                  />
                </a>
                <a href="/resume.pdf">
                  <DocumentTextIcon
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                    aria-valuetext="resume"
                    onMouseEnter={() => setHoverText("Check out my resume")}
                    onMouseLeave={() => setHoverText("")}
                  />
                </a>
                <a href="https://www.linkedin.com/in/justinauger/">
                  <BriefcaseIcon
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                    aria-valuetext="linkedin"
                    onMouseEnter={() => setHoverText("Find me on LinkedIn")}
                    onMouseLeave={() => setHoverText("")}
                  />
                </a>
                <a href="https://github.com/JustnAugr">
                  <CommandLineIcon
                    className="w-8 h-8 md:w-10 md:h-10 cursor-pointer hover:text-teal-700 dark:text-white dark:hover:text-emerald-400"
                    aria-valuetext="github"
                    onMouseEnter={() => setHoverText("Critique my GitHub projects")}
                    onMouseLeave={() => setHoverText("")}
                  />
                </a>
              </div>
              {/* sadly not using peer here as I want to set the hover text and peer-has-a[:hover] won't tell me which one I'm hovering over */}
              {hoverText && (
                <div className="order-5 flex justify-center pt-5 text-teal-800 dark:text-emerald-400">
                  {hoverText}
                </div>
              )}
            </div>
            <div className="flex justify-center pb-5">
              <p className="text-sm text-gray-700 dark:text-stone-400">
                thanks for stoppin&apos; by
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
