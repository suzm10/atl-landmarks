import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";
import locations from "../data/locations.js";
import image from "../public/locations/apex-museum.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Head>
        <title>ATL Landmarks</title>
        <meta
          name="description"
          content="Atlanta Civil Rights Landmarks Map and Description"
        />
        <meta property="og:title" content="ATL Civil Rights Landmarks" />
        <meta
          property="og:site_name"
          content="https://civilrightslandmarks-atl.azurewebsites.net/"
        />
        <meta
          property="og:description"
          content="Atlanta Civil Rights Landmarks Map and Description"
        />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container w-full sm:max-w-4xl sm:mx-auto p-5 sm:m-3">
        <h1 className="text-stone-900 text-2xl sm:text-3xl font-bold mb-2">
          Civil Rights Landmarks
        </h1>
        <div className="mt-3">
          <iframe
            title="google map"
            src="https://www.google.com/maps/d/u/0/embed?mid=1qena5y5E7NRpI_8FIgqFXbBmwgXwpCNI&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </div>
        <h1 className="text-stone-900 text-2xl sm:text-3xl font-bold mb-2 mt-6">
          Places to Visit
        </h1>
        <div className="relative bg-red-800">
          <div className="w-full border-2 border-red-800"></div>
        </div>
        <div className=" mt-4">
          {locations.map((place) => {
            return (
              <div key={place.id} className="md:flex mb-7 text-base">
                <div className="md:flex-none mr-5">
                  <Image
                    src={place.picture}
                    objectFit="cover"
                    alt={place.name}
                    width={250}
                    height={150}
                    className=""
                  />
                </div>
                <div>
                  <a href={place.website}>
                    <p className="font-semibold text-xl text-red-800 hover:text-red-600">
                      {place.name}
                    </p>
                  </a>
                  <p className="font-medium text-sm text-stone-900">
                    {place.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
