import { IoSearchOutline } from "react-icons/io5"
import personal from "../../assets/Ellipse 45.png"
import { IoIosNotificationsOutline } from "react-icons/io"
import { LuMessageCircle } from "react-icons/lu"

const Navbar = () => {
    return (
        <header className="container m-auto p-4 z-50"> 
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div >
                    <img className="w-10 h-10 border rounded-full hidden md:block" src={personal}  />

                    </div>

                    <h2 className="text-blue_maincolor text-[18px] md:text-[26px] font-bold">Welcome  Dr Masood</h2>

                </div>
                <div className="flex gap-2 items-center">
                    <div className=" w-[300px] gap-2 items-center border border-gray_maincolor rounded-full p-2 hidden md:flex">
                    <IoSearchOutline />
                    <input className="outline-none w-full" type="text" placeholder="Search Task, project, emplyuee..." />

                    </div>
                    <div className="flex gap-2 items-center">


                    <div className="relative ">
                    <IoIosNotificationsOutline size={25} />
                    <span className="w-2 h-2 bg-red-500 rounded-full top-0 right-0 absolute"></span>

                    </div>
                    <div className="relative block md:hidden">
                    <LuMessageCircle size={22}  />

                    <span className="w-2 h-2 bg-red-500 rounded-full top-0 right-0 absolute"></span>

                    </div>

                    </div>


                </div>

            </div>
        </header>
    )
}

export default Navbar