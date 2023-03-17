import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

//import logo from "../../assets/imgs/Logo3.png";
//import es from "../../assets/imgs/bolivia.png";
//import eng from "../../assets/imgs/united-states.png";

import { motion } from "framer-motion";

import Transaction from "../../icons/Transaction";

import FlipCountdown from "@rumess/react-flip-countdown";

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <div className="bg-lavender">
      {/*<nav className="py-5">
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
              className="bg-yellow rounded-xl text-black font-bold px-3 py-2 text-sm mr-10 ml-32"
            >
              {t("form.submit")}
            </a>
          </div>
        </div>
      </nav>*/}

      {/* NavBar */}

      <NavBar />

      {/* Home */}

      <div className="flex items-center justify-center">
        <div className="w-[45%]">
          <h1 className="text-white font-bold text-7xl">{t("header.title")}</h1>
          <h3 className="text-white pt-5 pb-2">{t("header.presentation")}</h3>
          <div className="pt-5">
            <FlipCountdown
              size="medium"
              theme="dark"
              hideYear
              // hideMinute
              // hideSecond
              endAt={"2023-4-16 00:00:00"}
            />
          </div>
        </div>
        <motion.div
          animate={{ x: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Transaction />
        </motion.div>
      </div>

      {/* Form */}

      <Form />

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default Home;
