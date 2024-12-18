import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1 className="text-center text-xl">Web Development Process</h1>

        <ol className="list-inside list-decimal text-sm text-center md:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Requirements Gathering</li>
          <li className="mb-2">Plan / Strategy</li>
          <li className="mb-2">UX / UI Design</li>
          <li className="mb-2">Technology Stack Selection</li>
          <li className="mb-2">Database Design</li>
          <li className="mb-2">Development</li>
          <li className="mb-2">Testing</li>
          <li className="mb-2">CI/CD</li>
          <li className="mb-2">Refine UX/UI</li>
          <li className="mb-2">Hosting and Deployment</li>
          <li className="mb-2">Documentation</li>
        </ol>

        <h3 className='text-white'>Please contact us regarding other IT services, 
                    <br/>We love to take on new challenges</h3>
      </main>


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:andrewswork@protonmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/email.svg"
            alt="Email icon"
            width={16}
            height={16}
          />
          andrewswork@protonmail.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/andrews-work"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to github →
        </a>
      </footer>

    </div>
  );
}
