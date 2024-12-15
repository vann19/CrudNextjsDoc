import React from "react";

const Offer = () => {
  return (
    <div className="flex items-center justify-center pt-24 pb-24 mt-24 bg-black">
      <div className="text-center px-6">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">Ayuk Ikutan untuk pendataan penduduk Wakanda</h2>
        <p className="text-gray-400 mb-8">Dengan Mendaftar maka anda akan diakui sebagai warga negara Wakanda</p>
        <button className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium mb-4 hover:bg-blue-800">Segera Daftar, sebelum terlambat</button>
        <p className="text-gray-400">Semakin cepat mendaftar maka semakin baik</p>
      </div>
    </div>
  );
};

export default Offer;
