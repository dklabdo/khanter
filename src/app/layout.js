
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import AppProvider from "./Provider/AppProvider";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Khenter",

  description:
    "Wassem vous aide à connecter votre audience à vos contenus en un scan.  Intégrez des QR codes intelligents à vos afchages et ofrez une  expérience interactive, mesurable et innovante.",

 
};

export default function RootLayout({ children, authb2b }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${poppins.variable}  ${poppins.variable} antialiased`}>
        <AppProvider>
          {children}
          <Analytics />
        </AppProvider>
      </body>
    </html>
  );
}
