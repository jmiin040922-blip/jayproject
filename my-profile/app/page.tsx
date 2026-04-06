import React from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12 text-center dark:bg-black">
      <main className="max-w-2xl space-y-8">
        {/* Profile Image / Placeholder */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 text-2xl font-bold text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600">
          YC
        </div>

        {/* Name and Bio */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            윤창식
          </h1>
          <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
          </p>
        </div>

        {/* Simple Links / CTA */}
        <div className="flex justify-center gap-6 pt-4">
          <a
            href="#"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            Blog
          </a>
          <a
            href="mailto:example@email.com"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            Contact
          </a>
        </div>
      </main>

      <footer className="absolute bottom-8 text-sm text-zinc-400">
        © {new Date().getFullYear()} 윤창식
      </footer>
    </div>
  );
}
