import {prisma} from "@/lib/prisma";


export const getDashboard = async () => {
    try {
        const dasboard = await prisma.penduduk.findMany();
        return dasboard;
    } catch (error) { 
        throw new Error("Failed to fetch dashboard data");
    }
}
