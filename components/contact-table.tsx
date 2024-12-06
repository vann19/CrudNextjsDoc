import { getDashboard } from "@/lib/data"
import { formatDate } from "@/lib/utils";
const DashboardTable = async () => {
    const dashboard = await getDashboard();

  return (
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
            <tr>
                <th className="py-3 px-6">#</th>
                <th className="py-3 px-6">Nama</th>
                <th className="py-3 px-6">Nik</th>
                <th className="py-3 px-6">Alamat</th>
                <th className="py-3 px-7">Jenis kelamin</th>
                <th className="py-3 px-6">Agama</th>
                <th className="py-3 px-6">Status Perkawinan</th>
                <th className="py-3 px-6">Pekerjaan</th>
                <th className="py-3 px-6 text-center">Create At</th>
                <th className="py-3 px-6 text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {dashboard.map((penduduk, index) => (
            <tr key={penduduk.id} className="bg-white border-b">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{penduduk.nama}</td>
                <td className="px-6">{penduduk.nik}</td>
                <td className="py-3 px-6">{penduduk.alamat}</td>
                <td className="py-3 px-6">{penduduk.jenis_kelamin}</td>
                <td className="py-3 px-6">{penduduk.agama}</td>
                <td className="py-3 px-6">{penduduk.status_perkawinan}</td>
                <td className="py-3 px-6">{penduduk.perkerjaan}</td>
                <td className="py-3 px-6">{formatDate(penduduk.createdAt.toString())}</td>
                <td className="py-3 px-6"></td>
                <td className="py-3 px-6">{}</td>
                <td></td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default DashboardTable