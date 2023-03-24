import logo from "../../assets/imgs/Logo3.png";
import es from "../../assets/imgs/bolivia.png";
import eng from "../../assets/imgs/united-states.png";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <nav className="py-5 ">
      <div className="flex justify-between items-center">
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
    </nav>
  );
};

export default NavBar;
