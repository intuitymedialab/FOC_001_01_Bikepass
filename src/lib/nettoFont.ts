import localFont from "next/font/local";

const Netto = localFont({
  src: [
    {
      path: "../assets/fonts/NettoWebPro.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/NettoWebPro-Bold.woff",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/NettoWebPro-Black.woff",
      weight: "900",
      style: "black",
    },
    {
      path: "../assets/fonts/NettoWebPro-Light.woff",
      weight: "100",
      style: "light",
    },
  ],
  variable: "--font-netto",
});

export { Netto };
