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
        <div className="lg:w-[45%]">
          <h1 className="text-5xl text-center pt-2 text-white font-bold lg:text-7xl lg:text-start lg:pt-0">
            {t("header.title")}
          </h1>
          <h3 className="pl-10 pr-10 text-center pb-12 pt-10 text-lg text-white lg:pt-5 lg:pb-2 lg:pl-0 lg:text-start">
            {t("header.presentation")}
          </h3>

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
