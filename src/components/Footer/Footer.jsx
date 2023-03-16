import logo from "../../assets/imgs/logo4.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <div className="bg-white h-64 flex flex-col text-center">
      <img src={logo} alt="" className="w-32 pt-5 mx-auto my-9" />
      <h4 className="text-grey2 py-2 text-sm">{t("footer.text-1")}</h4>
      <h4 className="text-grey2 py-2 text-sm">{t("footer.text-2")}</h4>
    </div>
  );
};

export default Footer;
