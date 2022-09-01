import "./Header.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';

import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import * as IoIcons from "react-icons/io";
import UsaFlag2 from "@asset/images/UsaFlag2.png";
import France from "@asset/images/France.png";



import { useState } from "react";
import { useEffect } from "react";
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

const Header = ({ loginClick, signUpClick }) => {
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en")
    }
  })


  const handleOnClose = (e) => {
    if (e.target.id === "lang") setOpen(open)
  }

  const [open, setOpen] = useState(true);
  const [englishState, setEnglishState] = useState(true)
  const [frenchState, setFrenchState] = useState(true)
  const englishBtn = () => {
    setEnglishState(!englishState)
    setFrenchState(!frenchState)
  }
  const frenchBtn = () => {
    setEnglishState(!englishState)
    setFrenchState(!frenchState)
  }
  const activeLink = " flex w-full h-12 items-center cursor-pointer hover:bg-barn text-blue-500"
  const normalLink = " flex w-full h-12 items-center cursor-pointer hover:bg-barn text-black"

  const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'fr',
      name: 'French',
      country_code: 'fr',
    }
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between bg-white p-2">
        <div className="container-fluid sticky-top">

          <div className="d-flex p-1 rounded rounded-3  border border-2">
            <input
              className="form-input pl-1 bg-transparent font-nunito "
              type="search"
              placeholder={t('search')}
            />
            <div className="flex justify-center align-items-center rounded-r-md h-12 w-10">
              <AiIcons.AiOutlineSearch className="cursor-pointer" />
            </div>
          </div>

          <button class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <div className="icon-container navbar-nav d-flex justify-content-around ms-auto">
              <div>
                <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <FcIcons.FcGlobe className="language-icon"/>
                  </button>
                  <ul className="language-box dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <h1 className="lng-title">{t('select_your_language')}</h1>
                    {languages.map(({ code, name, country_code }) => (
                      <li key={country_code}>
                        <button className="language-selector dropdown-item"
                        onClick={() => i18next.changeLanguage(code)}>
                          <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                          {name}
                        </button>
                      </li>

                    ))}
                  </ul>
                </div>

              </div>
              <button className="button"
                onClick={loginClick}>{t('login')}</button>

              <button className="button"
                onClick={signUpClick}>{t('sign_up')}</button>

            </div>

          </div>
        </div>



      </nav>
    </>
  );
};

export default Header;
