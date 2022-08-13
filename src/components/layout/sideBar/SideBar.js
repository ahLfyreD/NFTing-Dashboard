import "./SideBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as BsIcons from "react-icons/bs";
import { MenuData } from "./menu/MenuData";
import { NavLink } from "react-router-dom";
import icon from "../../../asset/images/icon.svg";
import side from "../../../asset/images/side.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const iconOnClick = () => {
    setOpen(!open);
  }
  const { t } = useTranslation(["sidebar"])
  const activeLink =
  "active-link text-black font-mono h-full w-full font-bold  gap-x-5 flex items-center border-r-4 border-blue-500  hover:text-primary";
  const normalLink =
  "normal-link text-black font-mono h-full w-full font-bold  gap-x-5 flex items-center  hover:text-primary";

  // const navLinkStyles = ({ isActive}) => {
  //   return {
  //     border: isActive ? '4px' : 'normal',
  //   }
  // }

  return (
    <div
      className={`${open ? "w-60" : "w-24"} 
    duration-500 h-screen sticky top-0 border-r border-light`}
    >
      <div className="flex gap-x-4 h-24 w-full sticky top-0 bg-white items-center">
        <img
          src={icon}
          className={`ml-4 h-12 w-12 cursor-pointer duration-500`}
        />

        <h1
          className={`text-blue-900 origin-left font-medium  text-4xl ${
            !open && "scale-0"
          }`}
        >
          NFTing
        </h1>

        <BsIcons.BsArrowLeftCircle
          className={`absolute cursor-pointer text-blue-900 
                  text-xl  top-10 bg-white rounded-full ${
                    !open && "rotate-180"
                  } ${open ? "right-3" : "-right-3"}`}
          onClick={iconOnClick}
          
        
        />
      </div>
      <div className={`h-fit sticky top-24`}>
        <ul className="w-full">
          {MenuData.map((item, index) => (
            <li
              key={index}
              className={`block h-10 cursor-pointer`}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => 
              isActive ? activeLink : normalLink}
              >
                <i className={` h-7 w-7 ml-7 p-1 text-center text-xl rounded-lg`}>{item.icons}</i>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left font-nunito duration-400`}
                >
                  {t(item.title)}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={`mx-4 mt-4 ${!open && "hidden"}`}>
          <img src={side} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
