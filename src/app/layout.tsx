import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | 11 Klassiekers',
    default: '11 Klassiekers',
  },
  description: "wielerpronostiek voor 11 voorjaarsklassiekers",
  applicationName: "11 klassiekers"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-be" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          
          {children}
         
        </ThemeProvider>
      </body>
    </html>
  );
}
