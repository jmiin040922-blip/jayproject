import React from "react";
import Image from "next/image";
import { Mail, BookOpen, ExternalLink, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
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
    <div className="min-h-screen bg-background font-sans selection:bg-pink-300 selection:text-black">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-background neo-border-sm border-t-0 border-l-0 border-r-0 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="font-black text-2xl tracking-tighter uppercase relative group cursor-pointer hover:text-yellow-400">
          YC/PORTFOLIO
        </div>
        <div className="hidden md:flex gap-8 font-bold text-lg">
          <a href="#about" className="hover:underline decoration-4 underline-offset-4 decoration-pink-400 uppercase">About</a>
          <a href="#links" className="hover:underline decoration-4 underline-offset-4 decoration-yellow-400 uppercase">Links</a>
          <a href="#contact" className="hover:underline decoration-4 underline-offset-4 decoration-blue-400 uppercase">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="md:hidden px-5 py-2.5 bg-yellow-300 neo-border-sm neo-shadow-sm neo-button font-black text-sm uppercase text-black"
        >
          Contact
        </a>
      </nav>

      <main className="flex flex-col items-center w-full px-6 md:px-12 pb-24 space-y-32 mt-16 md:mt-24">
        
        {/* HERO SECTION */}
        <section className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">
          <div className="flex-1 flex flex-col items-start gap-8 z-10">
            <div className="inline-block bg-pink-300 neo-border-sm neo-shadow-sm px-6 py-2.5 font-bold text-black uppercase transform -rotate-2">
              Available for work
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] font-black uppercase text-foreground leading-[0.85] tracking-tighter">
              YUN<br/>
              CHANG<br/>
              SHIK<span className="text-yellow-400">.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold max-w-xl text-foreground/90 mt-2">
              바이브 코딩을 배우고 있는 대학생입니다. 코드와 창의성으로 새로운 가치를 만들어냅니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-6 w-full sm:w-auto">
              <a 
                href="#links" 
                className="neo-button neo-border bg-yellow-400 neo-shadow flex items-center justify-center gap-3 px-8 py-5 font-black uppercase text-lg sm:text-xl text-black"
              >
                View Works <ArrowRight className="h-6 w-6" strokeWidth={3} />
              </a>
              <a 
                href="#contact" 
                className="neo-button neo-border bg-white neo-shadow flex items-center justify-center gap-3 px-8 py-5 font-black uppercase text-lg sm:text-xl text-black"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] group">
              <div className="absolute inset-0 bg-blue-400 neo-border translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 transition-transform group-hover:translate-x-8 group-hover:translate-y-8"></div>
              <div className="absolute inset-0 bg-white neo-border overflow-hidden z-20">
                <Image 
                  src="/avatar.png" 
                  alt="윤창식 Avatar" 
                  fill
                  sizes="(max-width: 768px) 400px, 450px"
                  className="object-cover grayscale hover:grayscale-0 transform hover:scale-105 transition-all duration-500 ease-out"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-yellow-400 neo-border neo-shadow p-4 z-30 font-black text-2xl uppercase transform rotate-6 hover:-rotate-3 transition-transform text-black hidden sm:block">
                Developer ✨
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="w-full max-w-6xl pt-12">
          <div className="bg-lime-300 neo-border neo-shadow p-8 md:p-12 lg:p-16 relative">
            <div className="absolute -top-8 -left-2 bg-white neo-border neo-shadow-sm px-8 py-3 font-black text-2xl uppercase transform -rotate-3 text-black">
              About Me
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 text-black leading-tight">
                  My Focus is <br/>
                  <span className="text-white bg-black px-4 py-1 leading-[1.3] inline-block mt-2 transform -rotate-1">User Experience</span>
                </h2>
                <p className="text-xl md:text-2xl font-bold text-black border-l-8 border-black pl-6">
                  아름다운 인터페이스를 구현하는 것을 즐기며, 사용자 경험(UX)에 집착합니다. Neobrutalism과 같은 독창적이고 과감한 디자인 트렌드를 탐구하고 적용하는 것을 좋아합니다.
                </p>
              </div>
              
              <div className="flex flex-col gap-8 justify-center">
                <div className="bg-white neo-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:-translate-y-2 transition-transform relative text-black duration-300">
                  <div className="w-5 h-5 bg-yellow-400 neo-border-sm rounded-full absolute -top-2 -right-2"></div>
                  <div className="w-16 h-16 bg-pink-300 neo-border flex flex-shrink-0 items-center justify-center font-black text-3xl">01</div>
                  <div>
                    <h3 className="font-black text-2xl uppercase mb-2">Vibe Coding</h3>
                    <p className="font-bold text-lg">최신 AI 도구를 활용하여 생산성을 극대화하고 트렌디한 결과물을 도출합니다.</p>
                  </div>
                </div>
                
                <div className="bg-white neo-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:-translate-y-2 transition-transform relative text-black duration-300">
                  <div className="w-5 h-5 bg-blue-400 neo-border-sm rounded-full absolute -top-2 -right-2"></div>
                  <div className="w-16 h-16 bg-cyan-300 neo-border flex flex-shrink-0 items-center justify-center font-black text-3xl">02</div>
                  <div>
                    <h3 className="font-black text-2xl uppercase mb-2">UI / UX</h3>
                    <p className="font-bold text-lg">단순한 기능을 넘어 사용자가 기억에 깊이 남는, 눈에 띄는 매력적인 인터페이스를 만듭니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LINKS / PROJECTS SECTION */}
        <section id="links" className="w-full max-w-6xl pt-12">
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Links</h2>
            <div className="h-4 flex-grow bg-foreground neo-border-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="#" className="group neo-button bg-yellow-300 neo-border neo-shadow flex flex-col p-8 text-black">
              <div className="flex justify-between items-start mb-16">
                <div className="p-4 bg-white neo-border group-hover:scale-110 transition-transform">
                  <GithubIcon className="h-10 w-10" />
                </div>
                <ExternalLink className="h-10 w-10 group-hover:rotate-45 transition-transform" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-4xl font-black uppercase mb-3 text-black">GitHub</h3>
                <p className="text-xl font-bold text-black/80">오픈소스 프로젝트 살펴보기</p>
              </div>
            </a>

            <a href="#" className="group neo-button bg-cyan-300 neo-border neo-shadow flex flex-col p-8 text-black">
              <div className="flex justify-between items-start mb-16">
                <div className="p-4 bg-white neo-border group-hover:scale-110 transition-transform">
                  <BookOpen className="h-10 w-10" strokeWidth={3} />
                </div>
                <ExternalLink className="h-10 w-10 group-hover:rotate-45 transition-transform" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-4xl font-black uppercase mb-3 text-black">Blog</h3>
                <p className="text-xl font-bold text-black/80">개발 기록과 인사이트 분석</p>
              </div>
            </a>

            <a href="mailto:example@email.com" id="contact" className="group neo-button bg-pink-300 neo-border neo-shadow flex flex-col p-8 text-black md:col-span-2 lg:col-span-1">
              <div className="flex justify-between items-start mb-16">
                <div className="p-4 bg-white neo-border group-hover:scale-110 transition-transform">
                  <Mail className="h-10 w-10" strokeWidth={3} />
                </div>
                <ExternalLink className="h-10 w-10 group-hover:rotate-45 transition-transform" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-4xl font-black uppercase mb-3 text-black">Contact</h3>
                <p className="text-xl font-bold text-black/80">언제든지 편하게 연락해 주세요</p>
              </div>
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="w-full bg-black text-white py-16 px-6 md:px-12 mt-12 border-t-8 border-yellow-400 relative overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 2px, transparent 0)", backgroundSize: "30px 30px" }}></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="text-6xl font-black tracking-tighter uppercase text-yellow-400">
            Y<br/>C<span className="text-pink-400">.</span>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <p className="font-bold text-xl md:text-2xl text-center uppercase tracking-wide">
              © {new Date().getFullYear()} YUN CHANGSHIK.<br />Crafted with passion & vibe.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-12 h-12 bg-white text-black font-black flex items-center justify-center neo-border hover:-translate-y-1 transition-transform">X</a>
              <a href="#" className="w-12 h-12 bg-blue-400 text-black font-black flex items-center justify-center neo-border hover:-translate-y-1 transition-transform">IN</a>
              <a href="#" className="w-12 h-12 bg-pink-400 text-black font-black flex items-center justify-center neo-border hover:-translate-y-1 transition-transform">GH</a>
            </div>
          </div>
          
          <a href="#" className="neo-button bg-white text-black neo-border px-8 py-4 font-black uppercase text-xl inline-block shadow-[6px_6px_0px_0px_#fde047]">
            Back to Top 
          </a>
        </div>
      </footer>
    </div>
  );
}
