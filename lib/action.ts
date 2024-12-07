"use server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const DashboardSchema = z.object({
  nama: z.string().max(255),
  nik: z.string().min(16),
  alamat: z.string().max(255),
  jenis_kelamin: z.string().max(15),
  agama: z.string().max(25),
  status_perkawinan: z.string().max(25),
  perkerjaan: z.string().max(25),
});

export const SaveDashboard = async (prevState: any, formData: FormData) => {
  const validata = DashboardSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!validata.success) {
    return {
      Error: validata.error.flatten().fieldErrors,
    };
  }
  
  try {
    await prisma.penduduk.create({
      data: {
        nama: validata.data.nama,
        nik: validata.data.nik,
        alamat: validata.data.alamat,
        jenis_kelamin: validata.data.jenis_kelamin,
        agama: validata.data.agama,
        status_perkawinan: validata.data.status_perkawinan,
        perkerjaan: validata.data.perkerjaan,
      },
    });
  } catch (error) {
    return { massage: "faild to createDashboard" };
  }

  revalidatePath("/penduduk");
  redirect("/penduduk");
};
