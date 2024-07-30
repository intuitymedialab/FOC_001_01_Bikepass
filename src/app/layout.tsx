import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from "next/head";
import { Netto } from "@/lib/nettoFont";

export const metadata: Metadata = {
  title: "intuity prototype",
  description: "A prototype by intuity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <meta name="author" content="intuity media lab" />
      </Head>

      <body
        className={cn(
          "max-h-screen h-screen bg-background font-sans antialiased grid grid-rows-main overflow-hidden",
          Netto.variable,
          "font-netto",
        )}>
        <main className="overflow-auto h-full bg-neutral-100">{children}</main>
      </body>
    </html>
  );
}
