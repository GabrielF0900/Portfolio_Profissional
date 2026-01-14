import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TimeBasedThemeProvider } from "@/components/time-based-theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Falcão - Desenvolvedor",
  description: "Portfolio pessoal de Gabriel Falcão, desenvolvedor web",
  icons: {
    icon: "/favicon-gabriel.svg",
    shortcut: "/favicon-gabriel.svg",
  },
  openGraph: {
    title: "Gabriel Falcão - Desenvolvedor",
    description: "Portfolio pessoal de Gabriel Falcão, desenvolvedor web",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TimeBasedThemeProvider>{children}</TimeBasedThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
