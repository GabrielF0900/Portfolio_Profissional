import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { SectionTracker } from "@/components/analytics/SectionTracker";
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EQ2R1WD4VR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EQ2R1WD4VR');
            `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
          <SectionTracker />
        </ThemeProvider>
      </body>
    </html>
  );
}
