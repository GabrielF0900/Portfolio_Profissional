import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Iury Souza | Cloud Engineering",
  description: "Building resilient cloud systems with a full stack approach. AWS Professional, Cloud Architect, SRE.",
  icons: {
    icon: "/favicon-gabriel.svg",
    shortcut: "/favicon-gabriel.svg",
  },
  openGraph: {
    title: "Iury Souza | Cloud Engineering",
    description: "Building resilient cloud systems with a full stack approach.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${firaCode.variable} bg-slate-950`}>
      <body className="font-sans antialiased bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}
