import { prisma } from "@/lib/prisma";
export const getDashboard = async (query: string, currentPage: number) => {
  try {
    const dasboard = await prisma.penduduk.findMany({
      where: {
        OR: [
          {
            nama: {
              contains: query.toLowerCase(),
            },
          },
          {
            nik: {
              contains: query.toLowerCase(),
            },
          },
          {
            alamat: {
              contains: query.toLowerCase(),
            },
          },
          {
            jenis_kelamin: {
              contains: query.toLowerCase(),
            },
          },
          {
            agama: {
              contains: query.toLowerCase(),
            },
          },
          {
            status_perkawinan: {
              contains: query.toLowerCase(),
            },
          },
          {
            perkerjaan: {
              contains: query.toLowerCase(),
            },
          },
        ],
      },
    });
    return dasboard;
  } catch (error) {
    throw new Error("Failed to fetch dashboard data");
  }
};

export const getDashboardById = async (id: string) => {
  try {
    const dasboard = await prisma.penduduk.findUnique({
      where: {
        id,
      },
    });
    return dasboard;
  } catch (error) {
    throw new Error("Failed to fetch dashboard data");
  }
};
