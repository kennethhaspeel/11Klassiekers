import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/ui-blocks/Header";
import Footer from "@/ui-blocks/Footer";
const inter = Inter({
  subsets: ["latin"],
});
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const metadata: Metadata = {
  title: {
    template: "%s | 11 Klassiekers",
    default: "11 Klassiekers",
  },
  description: "wielerpronostiek voor 11 voorjaarsklassiekers",
  applicationName: "11 klassiekers",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, getPermissions } = getKindeServerSession();
  const auth = await isAuthenticated()
const auths = await getPermissions() 
console.log(auths?.permissions)
  console.log(auth)
  return (
    <html lang="nl-be" suppressHydrationWarning>
      <body className={`${inter.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-dvh bg-home-img bg-cover bg-center">
            <div className="flex flex-col w-full lg:max-w-7xl mx-auto">
              <Header auth={auth} rechten={auths?.permissions}/>
              <div className="flex flex-grow">
                <main className=" flex-grow p-4 bg-black/80">{children}</main>
              </div>
              <div className="inset-x-0 bottom-0 fixed w-full lg:max-w-7xl mx-auto">
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
