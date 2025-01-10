import Image from "next/image";
import Footer from "@/ui-blocks/Footer";
import Header from "@/ui-blocks/Header";
export const metadata = {
  title: "Pagina niet gevonden",
};

export default function NotFound() {
  return (
    <div className="flex flex-col w-full lg:max-w-7xl mx-auto  h-dvh">
      <Header />
      <div className="flex-grow justify-center text-center mx-auto p-3">
        <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
          <h2 className="text-2xl">Route niet gevonden</h2>
          <Image
            className="m-0 rounded-xl"
            src="/images/notfound.png"
            width={300}
            height={300}
            sizes="300px"
            alt="Pagina niet gevonden"
            priority={true}
            title="Pagina niet gevonden"
          />
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
