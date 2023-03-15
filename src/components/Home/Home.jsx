import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

import geo from "../../assets/imgs/geometric.png";
import { useTranslation } from "react-i18next";

import logo from "../../assets/imgs/Logo3.png";
import es from "../../assets/imgs/bolivia.png";
import eng from "../../assets/imgs/united-states.png";

import global from "../../translations/es/global.json";

import Transaction from "../../icons/Transaction";

const Home = () => {
  const [t, i18n] = useTranslation("global");

  const toggleLanguage = () => {
    if (global === es) {
      i18n.changeLanguage("es");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className="bg-lavender h-screen">
      <nav className="py-5 ">
        <div className="flex justify-between items-center pb-5">
          <img src={logo} alt="" className="w-32 pt-5 ml-10" />

          <div className="flex">
            <img src={eng} alt="" className="w-8 h-8" />
            <img src={es} alt="" className="w-8 h-8" />
            <button className="bg-yellow rounded-xl text-black font-bold px-3 py-1 text-sm mr-10 ml-32">
              Suscribite
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        <div className="w-60">
          <h1 className="text-white font-bold text-3xl">{t("header.title")}</h1>
          <h3 className="text-white">{t("header.presentation")}</h3>
        </div>
        <div className="w-1">
          <Transaction />
        </div>
      </div>

      {/* <img src={geo} alt="" className="opacity-25 relative h-50"/> */}
      <Form />
    </div>
  );
};

export default Home;
