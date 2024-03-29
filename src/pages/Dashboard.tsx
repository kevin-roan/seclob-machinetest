import { Sidebar } from "../components";
import { IoMdNotifications } from "react-icons/io";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <section className="flex border">
        <h4 className="font-medium text-2xl">Upload CSV</h4>
        <div className="flex  gap-4 ">
          <IoMdNotifications />
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
            alt="user avatar"
            className="h-5"
          />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
