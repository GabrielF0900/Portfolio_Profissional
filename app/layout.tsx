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
  title: "Gabriel Falcão da Cruz | Full Stack Developer",
  description: "Full Stack Developer | AWS Certified Solutions Architect. Desenvolvimento de aplicações web focadas em automação e eficiência operacional.",
  icons: {
    icon: "/favicon-gabriel.svg",
    shortcut: "/favicon-gabriel.svg",
  },
  openGraph: {
    title: "Gabriel Falcão da Cruz | Full Stack Developer",
    description: "Full Stack Developer | AWS Certified Solutions Architect. Desenvolvimento de aplicações web focadas em automação e eficiência operacional.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${firaCode.variable} bg-white`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
