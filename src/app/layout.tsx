import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from "next/head";
import { Netto } from "@/lib/nettoFont";
// import Script from "next/script";

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
          "font-sans grid h-screen max-h-screen grid-rows-main overflow-hidden bg-slate-100 antialiased",
          Netto.variable,
          "font-netto",
        )}
      >
        <main className="relative flex h-screen overflow-auto">{children}</main>
        {/* <Script
          id="sg78fiued"
          strategy="beforeInteractive">{`window.difyChatbotConfig = {
              token: 'OJRejAeeXJDMrUk5',
             baseUrl: 'https://dify.cool.ity.cloud'
           }`}</Script>
        <Script
          id="OJRejAeeXJDMrUk5"
          defer
          src="https://dify.cool.ity.cloud/embed.min.js"
          strategy="beforeInteractive"
        /> */}
      </body>
    </html>
  );
}
