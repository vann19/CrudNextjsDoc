"use client";
import { SaveDashboard } from "@/lib/action";
import { useActionState } from "react";
import { SubmitButton } from "@/components/button";
const CreateFormPenduduk = () => {
  const [state, formAction] = useActionState(SaveDashboard, null);

  return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500
                    focus:border-blue-500    block w-full p-2.5"
            placeholder="Masukkan Nama"
          />
          <div id="nama-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm font-medium text-gray-900">{state?.Error?.nama}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Nik
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="nik"
            id="nik"
            minLength={16}
            maxLength={16}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500
                    focus:border-blue-500    block w-full p-2.5"
            placeholder="Masukkan Nik (16 digit)"
          />
          <div id="nik-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm font-medium text-gray-900">{state?.Error?.nik}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Alamat
          </label>
          <input
            type="text"
            name="alamat"
            id="alamat"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500
                    focus:border-blue-500    block w-full p-2.5"
            placeholder="Masukkan Alamat"
          />
          <div id="alamat-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm font-medium text-gray-900">{state?.Error?.alamat}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Jenis Kelamin
          </label>
          <input
            type="text"
            name="jenis_kelamin"
            id="JenisKelamin"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500
                    focus:border-blue-500    block w-full p-2.5"
            placeholder="Masukkan Jenis Kelamin"
          />
          <div id="jenis-kelamin-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm font-medium text-gray-900">{state?.Error?.jenis_kelamin}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Agama
          </label>
          <input
            type="text"
            name="agama"
            id="agama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500
                    focus:border-blue-500    block w-full p-2.5"
            placeholder="Masukkan Agama"
          />
          <div id="agama-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm font-medium text-gray-900">{state?.Error?.agama}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Status Perkawinan
          </label>
          <input
            type="text"
            name="status_perkawinan"
            id="StatusPerkawinan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500
                    focus:border-blue-500    block w-full p-2.5"
            placeholder="Masukkan Status Perkawinan"
          />
          <div id="status-perkawinan-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm font-medium text-gray-900">{state?.Error?.status_perkawinan}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Pekerjaan
          </label>
          <input
            type="text"
            name="perkerjaan"
            id="Pekerjaan"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500
                    focus:border-blue-500    block w-full p-2.5"
            placeholder="Masukkan Pekerjaan"
          />
          <div id="pekerjaan-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm font-medium text-gray-900">{state?.Error?.perkerjaan}</p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm font-medium text-gray-900">{state?.massage}</p>
        </div>
        <SubmitButton label="save" />
      </form>
    </div>
  );
};

export default CreateFormPenduduk;
// SAMPAI SINI
