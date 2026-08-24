import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { SectionTracker } from "@/components/analytics/SectionTracker";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Falcão | Desenvolvedor Backend Java",
  description:
    "Portfólio de Gabriel Falcão, Desenvolvedor Backend Java com Spring Boot, sistemas distribuídos e AWS.",
  icons: {
    icon: "/favicon-gabriel.svg",
    shortcut: "/favicon-gabriel.svg",
  },
  openGraph: {
    title: "Gabriel Falcão | Desenvolvedor Backend Java",
    description:
      "Projetos e experiência em Backend Java, Spring Boot, sistemas distribuídos e AWS.",
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
      <body suppressHydrationWarning>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EQ2R1WD4VR" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EQ2R1WD4VR');
          `}
        </Script>
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
