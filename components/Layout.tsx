import Head from "next/head";
import Link from "next/link";
import type React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Blissbook Full-Stack Product Engineer</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex items-center justify-center border-b py-2">
        <div className="font-semibold text-lg">
          Blissbook Full-Stack Product Engineer
        </div>
      </div>

      <div className="border-b">
        <div className="flex items-center gap-4 container mx-auto py-2">
          <Link className="text-blue-500" href="/documents">
            Documents
          </Link>
          <Link className="text-blue-500" href="/people">
            People
          </Link>
        </div>
      </div>

      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
};
