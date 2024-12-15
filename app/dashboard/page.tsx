import DashboardTable from "@/components/contact-table";
import Search from "@/components/search";
import CreateButton from "@/components/button";


 const Dashboard = ({
  searchParams
 }:{
  searchParams?:{
    query?:string
    page?:string
  }
 }) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;


  return (
    <div className="max-w-screen-lg mx-auto mt-5 ">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search/>
        <CreateButton />
      </div>
      <DashboardTable query={query} currentPage={currentPage} />
    </div>
  );
};

export default Dashboard;
