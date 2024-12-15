"use client";
import React, { useState } from "react";
import jsPDF from "jspdf";
import { FaFilePdf } from "react-icons/fa6";

const FormGeneratePDF = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    tempatTanggalLahir: "",
    agama: "",
    kewarganegaraan: "",
    statusPerkawinan: "",
    pekerjaan: "",
    alamatSaatIni: "",
    kepalaKeluarga: "",
    kartuKeluarga: "",
    hubunganKeluarga: "",
    alasan: "",
    lamaTinggal: "",

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGeneratePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    const templateImage = "/images/domisili.jpg";
    doc.addImage(templateImage, "JPEG", 0, 0, 210, 297);

    doc.setFontSize(10);
    const startX = 20;
    let startY = 50;
    const lineHeight = 10;

    doc.text(`NAMA : ${formData.nama}`, startX, startY);
    startY += lineHeight;

    doc.text(`NIK : ${formData.nik}`, startX, startY);
    startY += lineHeight;

    doc.text(`TEMPAT & TANGGAL LAHIR : ${formData.tempatTanggalLahir}`, startX, startY);
    startY += lineHeight;

    doc.text(`AGAMA : ${formData.agama}`, startX, startY);
    startY += lineHeight;

    doc.text(`KEWARGANEGARAAN : ${formData.kewarganegaraan}`, startX, startY);
    startY += lineHeight;

    doc.text(`STATUS PERKAWINAN : ${formData.statusPerkawinan}`, startX, startY);
    startY += lineHeight;

    doc.text(`PEKERJAAN : ${formData.pekerjaan}`, startX, startY);
    startY += lineHeight;

    doc.text(`ALAMAT DOMISILI : ${formData.alamatSaatIni}`, startX, startY);
    startY += lineHeight;

    doc.text(`KEPALA KELUARGA : ${formData.kepalaKeluarga}`, startX, startY);
    startY += lineHeight;

    doc.text(`KARTU KELUARGA : ${formData.kartuKeluarga}`, startX, startY);
    startY += lineHeight;

    doc.text(`HUBUNGAN KELUARGA  : ${formData.hubunganKeluarga}`, startX, startY);
    startY += lineHeight;

    doc.text(`ALASAN : ${formData.alasan}`, startX, startY);
    startY += lineHeight;

    doc.text(`LAMA TINGGAL : ${formData.lamaTinggal}`, startX, startY);

    doc.save("domisili.pdf");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Form Pengisian Surat Domisili</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {(Object.keys(formData) as (keyof typeof formData)[]).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">{key.replace(/([A-Z])/g, " $1").toUpperCase()}:</label>
            <input type="text" name={key} value={formData[key]} onChange={(e) => handleChange(e)} className="border rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
          </div>
        ))}

        <button type="button" onClick={handleGeneratePDF} className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center">
          Unduh Data Domisili
          <FaFilePdf className="ml-2"  />
        </button>
      </form>
    </div>
  );
};

export default FormGeneratePDF;
