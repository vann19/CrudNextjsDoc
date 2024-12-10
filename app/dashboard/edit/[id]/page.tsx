"use server";
import UpdateForm from "@/components/edit-form";
import { getDashboardById } from "@/lib/data";
import { notFound } from "next/navigation";

const UpdateDashboard = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const penduduk = await getDashboardById(id);

    if(!penduduk) {
        notFound();
    }
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2 font-extrabold ">Update Data User</h1>
      <UpdateForm penduduk={penduduk} />
    </div>
  );
};

export default UpdateDashboard;
