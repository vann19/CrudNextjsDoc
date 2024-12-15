"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const AboutPage = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);


  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div>
              <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" />
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold"
                data-aos="fade-up">
                Ayo Segera <span className="text-orange-700">Mendaftar</span> di BPS (Badan Pusat Statistik) Pemerintah Wakanda
              </h1>
              <div className="w-20 h-2 bg-orange-700 my-4"></div>
              <p className="text-xl mb-10">
                Dengan Mendaftar Anda Telah Membantu Negara Untuk Mendata Warganya Secara Detail Yang Nantinya Akan Bermanfaat Untuk Pemberian Makan Gratis Tepat Sasaran.
              </p>
              <button className="bg-gray-700 text-white text-2xl font-medium px-4 py-2 rounded shadow hover:bg-orange-400">Daftar Sekarang</button>
            </div>
          </header>
        </div>
      </div>
      <img src="/images/penduduk-2.jpg" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="700" />
    </div>
  );
};

export default AboutPage;
