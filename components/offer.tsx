import React from "react";

const Offer = () => {
  return (
    <div className="flex items-center justify-center pt-24 pb-24 mt-24 bg-black">
      <div className="text-center px-6">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">Ayuk Daftar Sekarang dan Dapatkan Potongan Harga 50%</h2>
        <p className="text-gray-400 mb-8">Dengan Mendaftar sebagai member anda akan mendapatkan seluruh sorcecode yang tersedia untuk belajar</p>
        <button className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg font-medium mb-4 hover:bg-blue-800">Segera Daftar, Promo Berlaku Sampai Akhir Desember</button>
        <p className="text-gray-400">Transfer Mengunakan Qris Dapat potongan 2%</p>
      </div>
    </div>
  );
};

export default Offer;
