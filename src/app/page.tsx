import Footer from "@/ui-blocks/Footer";
import Header from "@/ui-blocks/Header";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <div className="flex flex-col w-full lg:max-w-7xl mx-auto  h-dvh">
        <Header />
        <main className="flex-grow justify-center text-center mx-auto p-3">
          <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/70 mx-auto text-white sm:text-2xl">
           <h1>Welkom bij de 11 klassiekers</h1>
          </div>
         
          </main>
        <Footer />
      </div>
    </div>
  );
}
