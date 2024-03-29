import { RxDashboard } from "react-icons/rx";
import { MdDriveFolderUpload } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa";
import { GrScheduleNew } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { IoMdNotifications } from "react-icons/io";
import { FaGear } from "react-icons/fa6";

function Sidebar() {
  return (
    <aside className="w-[20vmax] h-screen bg-white">
      <div className="flex items-center gap-4 px-4 py-4">
        <img
          alt="logo"
          className="h-20"
          src="https://static.vecteezy.com/system/resources/thumbnails/017/398/788/small/white-circle-free-png.png"
        />
        <h2 className="text-2xl font-medium">Base</h2>
      </div>
      <div className="flex flex-col list-none">
        <li className="rounded-md hover:text-[var(--primary-color)] flex items-center py-2 my-2 justify-center gap-4 text-[gray] ">
          <RxDashboard />
          Dashboard
        </li>
        <li className="rounded-md hover:text-[var(--primary-color)] flex items-center py-2 justify-center gap-4 my-4 text-[var(--primary-color)]">
          <MdDriveFolderUpload />
          Upload
        </li>
        <li className="rounded-md hover:text-[var(--primary-color)] flex items-center py-2 justify-center gap-4 my-4 text-[gray]">
          <FaFileInvoice />
          Invoice
        </li>
        <li className="rounded-md hover:text-[var(--primary-color)] flex items-center py-2 justify-center gap-4 my-4 text-[gray]">
          <GrScheduleNew />
          Schedule
        </li>
        <li className="rounded-md hover:text-[var(--primary-color)] flex items-center py-2 justify-center gap-4 my-4 text-[gray]">
          <SlCalender />
          Calender
        </li>
        <li className="rounded-md hover:text-[var(--primary-color)] flex items-center py-2 justify-center gap-4 my-4 text-[gray]">
          <IoMdNotifications />
          Notification
        </li>
        <li className="rounded-md hover:text-[var(--primary-color)] flex items-center py-2 justify-center gap-4 my-4 text-[gray]">
          <FaGear />
          Settigs
        </li>
      </div>
    </aside>
  );
}

export default Sidebar;
