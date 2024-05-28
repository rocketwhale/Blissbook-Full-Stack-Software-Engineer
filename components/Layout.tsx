import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const linkClasses = (paths: string[]) => [
    'py-1 px-4',
    paths.includes(router.pathname) ? 'text-black rounded-t-lg border-solid border-x-2 border-t-2 border-indigo-100' : 'text-blue-500'
  ].join(' ');


  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Blissbook Full-Stack Product Engineer</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <div className="flex items-center justify-center border-b py-2">
        <div className="font-semibold text-lg">
          Blissbook Full-Stack Product Engineer
        </div>
      </div>

      <div className="border-b">
        <div className="flex items-center gap-4 container mx-auto pt-2">
          <Link
            className={linkClasses(['/', '/documents'])}
            href="/documents"
          >
            Documents
          </Link>
          <Link
            className={linkClasses(['/people'])}
            href="/people"
          >
            People
          </Link>
        </div>
      </div>

      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
};
