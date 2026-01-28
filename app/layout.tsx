import type { Metadata, Viewport } from "next";
import { Montserrat, Inter, Orbitron } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const orbitron = Orbitron({ 
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Gabriel Falcao | Cloud Architect & Full Stack Developer",
  description: "Portfolio profissional de Gabriel Falcao da Cruz - Desenvolvedor Full Stack e Cloud Architect. Explorando a fronteira entre o codigo e a nuvem.",
  icons: {
    icon: "/favicon-gabriel.svg",
    shortcut: "/favicon-gabriel.svg",
  },
  openGraph: {
    title: "Gabriel Falcao | Cloud Architect & Full Stack Developer",
    description: "Portfolio profissional de Gabriel Falcao da Cruz - Desenvolvedor Full Stack e Cloud Architect. Explorando a fronteira entre o codigo e a nuvem.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body 
        className={`${montserrat.variable} ${inter.variable} ${orbitron.variable} font-sans antialiased`} 
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
