import Switch from "@mui/material/Switch";
import logo from "../../assets/imgs/Logo3.png";
import es from "../../assets/imgs/bolivia.png";
import eng from "../../assets/imgs/united-states.png";
import { useTranslation } from "react-i18next";


const NavBar = () => {

    const [i18n] = useTranslation("global")


  return (
    <nav className="py-5 ">
      <div className="flex justify-between items-center pb-5">
        <img src={logo} alt="" className="w-32 pt-5 ml-10" />

        <div className="flex">
            <img src={eng} alt="" className="w-8 h-8" />
            <Switch
              defaultChecked color="default" onClick={() => i18n.changeLanguage("en")}/>
            <img src={es} alt="" className="w-8 h-8" />
            <button className="bg-yellow rounded-xl text-black font-bold px-3 py-1 text-sm mr-10 ml-32">
              Suscribite
            </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
