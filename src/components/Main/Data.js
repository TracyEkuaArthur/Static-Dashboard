import {AiOutlineRobot} from "react-icons/ai";
import {FcPhoneAndroid } from "react-icons/fc";
import {BsCalendar3Event} from "react-icons/bs";
import {ImPieChart} from "react-icons/im";
import {MdOutlineDocumentScanner} from "react-icons/md";
import {BsCameraVideo} from "react-icons/bs";
import img from "../../assets/img/auntie.jpg"


const maindata = [
    {
        id: 1,
        css: "bg-pink-500 w-10 rounded-full h-10 bottom-44 absolute mx-8 bg-pink-500",
        icon: <FcPhoneAndroid size={25} className="mx-1.5 mt-1.5"/> ,
        heading: "App Development",
        postion: "Marketing Team",
        memberImage: ["../../assets/img/auntie.jpg","../../assets/img/ekua.jpg","../../assets/img/mother.jpg"],
        percentage: "34%",
    },
    {
        id: 2,
        css: "bg-orange-600 border-2 w-10 rounded-full h-10 bottom-44 absolute mx-8 bg-pink-500",
        icon: <AiOutlineRobot size={25} className="mx-1.5 mt-1.5"/>,
        heading: "Web Design",
        postion: "Marketing Team",
        memberImage: ["../../assets/img/auntie.jpg"],
        percentage: "76%",
    },
    {
        id: 3,
        css: "bg-teal-700 border-2 w-10 rounded-full h-10 bottom-44 absolute mx-8 bg-pink-500",
        icon: <BsCalendar3Event size={20} className="mx-1.5 mt-1.5"/>,
        heading: "Landing Page",
        postion: "Marketing Team",
        memberImage: ["../../assets/img/auntie.jpg","../../assets/img/ekua.jpg","../../assets/img/mother.jpg"],
        percentage: "4%",

    },
    {id: 4,
        css: "bg-fuchsia-700 border-2 w-10 rounded-full h-10 bottom-44 absolute mx-8 bg-pink-500",
        icon: <ImPieChart size={20} className="mx-1.5 mt-1.5"/>,
        heading: "Business Compare",
        postion: "Marketing Team",
        memberImage: ["../../assets/img/auntie.jpg","../../assets/img/ekua.jpg","../../assets/img/mother.jpg"],
        percentage: "90%",
    },
    {
        id: 5,
        css: "bg-blue-400 border-2 w-10 rounded-full h-10 bottom-44 absolute mx-8 bg-pink-500",
        icon: <MdOutlineDocumentScanner size={20} className="mx-1.5 mt-1.5"/>,
        heading: "Commerce Checkout",
        postion: "Marketing Team",
        memberImage: ["../../assets/img/auntie.jpg","../../assets/img/ekua.jpg","../../assets/img/mother.jpg"],
        percentage: "65%",
    },
    {
        id: 6,
        css: "bg-yellow-600 border-2 w-10 rounded-full h-10 bottom-44 absolute mx-8 bg-pink-500",
        icon: <BsCameraVideo size={20} className="mx-1.5 mt-1.5" />,
        heading: "Data Staging",
        postion: "Marketing Team",
        memberImage: ["../../assets/img/auntie.jpg","../../assets/img/ekua.jpg","../../assets/images/mother.jpg"],
        percentage: "69%",
    },
   

]
export {maindata};