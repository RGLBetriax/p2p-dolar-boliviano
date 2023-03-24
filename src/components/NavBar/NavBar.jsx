import { useState } from "react";
import logo from "../../assets/imgs/Logo3.png";
import es from "../../assets/imgs/bolivia.png";
import eng from "../../assets/imgs/united-states.png";
import { useTranslation } from "react-i18next";
import Menu from "../../icons/Menu";
import Cancel from "../../icons/Cancel";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-5 bg-blue lg:bg-lavender">
      <div className="hidden md:flex justify-between items-center">
        <img src={logo} alt="" className="w-32 pt-5 ml-10" />

        <div className="flex">
          <button onClick={() => i18n.changeLanguage("en")}>
            <img src={eng} alt="" className="w-8 h-8 mr-5" />
          </button>
          <button onClick={() => i18n.changeLanguage("es")}>
            <img src={es} alt="" className="w-8 h-8" />
          </button>
          <a
            href="#form"
            className="bg-yellow rounded-xl text-black font-bold px-4 py-3 text-sm mr-10 ml-12"
          >
            {t("form.submit")}
          </a>
        </div>
      </div>
      <div className="block lg:hidden">
       <button onClick={() => setOpen(!open)}>{open ? <Menu/> : <Cancel/> }</button>
        <div className={`flex flex-col bg-blue ${open ? "hidden" : "block"}`}>
          <button onClick={() => i18n.changeLanguage("en")} className="text-blueLight pb-3">Inglés</button>
          <button onClick={() => i18n.changeLanguage("es")} className="text-blueLight pb-3">Español</button>
          <a
            href="#form"
            className="bg-yellow rounded-xl text-black font-bold py-3 text-sm text-center w-40 ml-48"
          >
            {t("form.submit")}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
