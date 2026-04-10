import React from "react";
import Image from "next/image";
import { Mail, BookOpen, ChevronRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-900 dark:bg-[#030305] dark:text-zinc-50 selection:bg-indigo-500/30">
      
      {/* Background Aurora */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] h-[70vw] w-[70vw] rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-[120px] dark:from-indigo-600/20 dark:to-purple-900/20 animate-aurora mix-blend-screen opacity-70"></div>
        <div className="absolute bottom-[-20%] right-[-10%] h-[60vw] w-[60vw] rounded-full bg-gradient-to-tl from-blue-400/20 to-cyan-400/20 blur-[100px] dark:from-blue-700/20 dark:to-cyan-900/20 animate-aurora delay-200 mix-blend-screen opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-xl space-y-8 flex flex-col items-center">
          
          {/* Profile Card */}
          <div className="group relative w-full animate-fade-in-up">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-25 blur-lg transition duration-1000 group-hover:opacity-50 group-hover:duration-200"></div>
            
            <div className="relative glass w-full rounded-3xl p-10 flex flex-col items-center transition-all duration-500 hover:-translate-y-1">
              
              {/* Profile Image */}
              <div className="relative mb-8 animate-float">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-400 opacity-20 blur-md dark:opacity-40 animate-pulse"></div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 p-[2px]">
                  <div className="h-full w-full rounded-full bg-background/80 backdrop-blur-sm"></div>
                </div>
                <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-transparent shadow-xl">
                  <Image 
                    src="/avatar.png" 
                    alt="윤창식 Avatar" 
                    fill
                    sizes="128px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Title & Bio */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 backdrop-blur-sm shadow-sm transition-transform hover:scale-105 cursor-default">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                  </span>
                  새로운 기회를 찾고 있습니다
                </div>
                
                <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-zinc-400 pb-1">
                  윤창식
                </h1>
                
                <div className="space-y-2 mt-4 text-center">
                  <p className="text-lg font-medium text-zinc-600 dark:text-zinc-300">
                    바이브 코딩을 배우고 있는 대학생입니다.
                  </p>
                  <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    코드와 창의성으로 새로운 가치를 만들어냅니다. 사용자 경험(UX)에 집착하며 아름다운 인터페이스를 구현하는 것을 즐깁니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full space-y-4 animate-fade-in-up delay-200">
            {[
              { title: "GitHub", subtitle: "오픈소스 프로젝트 살펴보기", icon: <GithubIcon className="h-5 w-5" />, href: "#", color: "from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-white" },
              { title: "Blog", subtitle: "개발 기록과 인사이트", icon: <BookOpen className="h-5 w-5" />, href: "#", color: "from-blue-500 to-cyan-500" },
              { title: "Contact", subtitle: "언제든지 편하게 연락해 주세요", icon: <Mail className="h-5 w-5" />, href: "mailto:example@email.com", color: "from-purple-500 to-pink-500" }
            ].map((link, idx) => (
              <a key={idx} href={link.href} className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl glass p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}></div>
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-black/50 border border-zinc-200/50 dark:border-white/10 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                    <div className="text-zinc-600 dark:text-zinc-300 transition-colors duration-300 group-hover:text-indigo-500">
                      {link.icon}
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{link.title}</h3>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{link.subtitle}</p>
                  </div>
                </div>
                
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-white/5 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0">
                  <ChevronRight className="h-4 w-4 text-zinc-600 dark:text-zinc-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 w-full text-center text-xs font-medium text-zinc-500/80 animate-fade-in-up delay-400">
        <p>© {new Date().getFullYear()} 윤창식. Crafted with passion & vibe.</p>
      </footer>
    </div>
  );
}
