import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import Transaction from "../../icons/Transaction";

import FlipCountdown from "@rumess/react-flip-countdown";

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <div className="bg-lavender">
      {/* NavBar */}

      <NavBar />

      {/* Home */}

      <div className="flex items-center justify-center">
        <div className="w-[45%]">
          <h1 className="text-white font-bold text-7xl">{t("header.title")}</h1>
          <h3 className="text-white pt-5 pb-2">{t("header.presentation")}</h3>
          {/*<div className="pt-5">
            <FlipCountdown
              size="medium"
              theme="dark"
              hideYear
              // hideMinute
              // hideSecond
              endAt={"2023-4-16 00:00:00"}
            />
          </div>*/}
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
