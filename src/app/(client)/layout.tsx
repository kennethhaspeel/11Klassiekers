import Footer from "@/ui-blocks/Footer";
import Header from "@/ui-blocks/Header";

export default async function RSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

        <div className="flex flex-col w-full lg:max-w-7xl mx-auto  h-dvh">
          <Header />
          <main className="flex-grow justify-center text-center mx-auto p-3">
            {children}
          </main>
          <Footer />
        </div>

    </>
  );
}
