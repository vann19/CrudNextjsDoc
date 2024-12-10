"use client";
import CreateFormPenduduk from "@/components/create-form-penduduk";
import Image from "next/image";

const TambahPenduduk = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 bg-white rounded-lg shadow-lg max-w-4xl p-5">
        {/* Kolom Kiri: Gambar */}
        <div className="lg:w-1/2  mt-[10vh]">
          <Image src="/images/man.png" width={500} height={500} alt="Illustration" className="rounded-lg object-cover w-full h-auto" />
        </div>

        {/* Kolom Kanan: Form */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <h1 className="text-2xl text-center mb-4 font-extrabold">MASUKAN DATA ANDA</h1>
          <CreateFormPenduduk />
        </div>
      </div>
    </div>
  );
};

export default TambahPenduduk;
