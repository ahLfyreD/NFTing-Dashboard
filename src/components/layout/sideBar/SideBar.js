import "./Sidebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as BsIcons from "react-icons/bs";
import { MenuData } from "./menu/MenuData";
import { Link } from "react-router-dom";
import icon from "../../../asset/images/icon.svg";
import side from "../../../asset/images/side.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import  NFTlogo  from "@asset/images/NFTingHeader.png";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const iconOnClick = () => {
    setOpen(!open);
  }
  const { t } = useTranslation(["sidebar"])
  const activeLink =
  "active-link";
  const normalLink =
  "normal-link";

  // const navLinkStyles = ({ isActive}) => {
  //   return {
  //     border: isActive ? '4px' : 'normal',
  //   }
  // }

  return (
    <div
      className={`sidebar`}
      style={open ? {width: 250} : {width: 70}}

    >
       <div className="sidebar-header sticky-top d-flex w-100  bg-white align-items-center">
        <img
          src={icon}
          className={`ml-4 cursor-pointer`}
        />

        <img
          src={NFTlogo}
          className={` ${
            !open && "d-none"
          }`}
          style={{height: 40, width: 150,}}
        />
          

        <BsIcons.BsArrowLeftCircle
          className="arrow"
          onClick={iconOnClick}
        
        />
      </div>
      <div className="menu-data">
        <ul className="w-100 p-0 flex-column">
          {MenuData.map((item, index) => (
            <li
              key={index}
              className="nav-item d-block"
            >
              <Link
                to={item.path}
                className="nav-link"
              >
                <i className="nav-icon">{item.icons}</i>
                <span
                  className={`${
                    !open && "d-none"
                  }`}
                  style={{fontFamily: 'nunito'}}
                >
                  {t(item.title)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className={`mx-4 mt-4 ${!open && "visually-hidden"}`}>
          <img src={side} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
