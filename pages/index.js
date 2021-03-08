import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Highland Exploration Coffee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-gray-400">
        <div className="flex justify-between m-4">
          <h1 className="text-l font-semibold text-gray-500">
            <a href="#">Highland Exploration Coffee</a>
          </h1>
          <nav>
            <a
              className="text-base text-gray-500 px-2 hover:underline"
              href="#"
            >
              Shop
            </a>
            <a
              className="text-base text-gray-500 px-2 hover:underline"
              href="#"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <div className="relative h-400">
            <div className="absolute inset-0">
              <Image
                className="h-full w-full object-cover"
                src="/trail.jpg"
                alt="Trail"
                layout="fill"
              ></Image>
              <div className="absolute inset-0 bg-gray-400 multiply-blend"></div>
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="block text-center text-4xl tracking-tight font-extrabold text-white">
                Highland Exploration Coffee
              </h1>
              <p className="block mt-40 text-center mx-auto text-xl text-white">
                Speciality coffee in the Laurel Highlands.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2 h-400 w-full">
            <div className="flex items-center mx-auto">
              <p className="text-center">
                This is specialty coffee for the Laurel Highlands.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                className="h-full w-full rounded-lg shadow-lg object-cover object-center"
                src="/coffee-beans.jpg"
                alt="Coffee Beans"
                width={250}
                height={375}
              ></Image>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-400 bg-white">
        <div className="flex justify-between m-4">
          <div>
            <h1 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Hours
            </h1>
            <p className="text-base text-gray-500">M-F: 6:30am - 3pm</p>
            <p className="text-base text-gray-500">Sat: 6:30am - 4pm</p>
          </div>

          <div>
            <h1 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Address
            </h1>
            <p className="text-base text-gray-500">Street Name</p>
            <p className="text-base text-gray-500">Rockwood, PA 15557</p>
            <p className="text-base text-gray-500">Phone Number</p>
          </div>

          <div className="flex items-center">
            <h1 className="text-base font-semibold text-gray-500">
              Highland Exploration Coffee
            </h1>
          </div>
        </div>

        <div className="ml-4 text-base text-gray-500">
          &copy; {new Date().getFullYear().toString()} Highland Exploration
          Coffee. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
