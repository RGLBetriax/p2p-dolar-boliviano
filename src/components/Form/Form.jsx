/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-escape */
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Scene2 from "../../icons/Scene2";
import { useTranslation } from "react-i18next";
import { fetchSubs, postUser } from "../../redux/states/user/userSlice";

/* Modal */
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Terms from "../../assets/docs/Terms.jsx";
const Form = () => {
  const dispatch = useDispatch();
  const subs = useSelector((state) => state.user.subs);

  /* Modal states */
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const [t] = useTranslation("global");
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    dispatch(fetchSubs());
  }, []);

  const onSubmit = async (data) => {
    try {
      dispatch(postUser(data));
      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div
      className="bg-blueLight w-full h-[1210px] lg:h-5/6 lg:flex justify-center"
      id="form"
    >
      <div className="flex flex-col w-96 ml-10 text-center lg:text-left pt-20 lg:mt-5">
        <h2 className="text-lavender font-bold text-5xl sm:text-6xl">
          {t("form.svg_title")}
        </h2>
        <h3 className="text-lavender font-bold text-xl mt-6">
          {t("form.svg_subtitle")}
        </h3>
        <p className="text-lavender font-bold text-xl mt-6">
          {t("form.p_1")} <span className="text-blue2 text-2xl">{subs}</span>{" "}
          {t("form.p_2")}
        </p>
        <div className="hidden lg:flex">
          <Scene2 />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-xl my-9 h-[650px] w-[370px] md:w-[400px] ml-[52px] md:ml-72 mt-12 lg:mt-40"
      >
        <h2 className="text-lavender text-3xl font-medium mb-2 pl-5 md:pl-8 pt-8">
          {t("form.suscription")}
        </h2>
        <h3 className="text-lavender text-sm mb-2 pl-5 md:pl-8 w-96">
          {t("form.info")}
        </h3>
        <div>
          <input
            className="border border-gray-400 rounded mb-4 ml-5 md:ml-8 mt-6 p-3 w-[330px] "
            type="text"
            placeholder={t("form.name")}
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <p className="text-red ml-5 md:ml-8">
              {t("validators.required-validation")}
            </p>
          )}
          <input
            className="border border-gray-400 rounded mb-4 ml-5 md:ml-8 mt-6 p-3 w-[330px]"
            type="text"
            placeholder={t("form.lastname")}
            {...register("lastName", { required: true })}
          />
          {errors.lastName?.type === "required" && (
            <p className="text-red ml-5 md:ml-8">
              {t("validators.required-validation")}
            </p>
          )}
        </div>
        <div>
          <input
            className="border border-gray-400 rounded mb-4 ml-5 md:ml-8 mt-6 p-3 w-[330px]"
            type="text"
            placeholder={t("form.email")}
            {...register("email", {
              pattern: regex,
              required: true,
            })}
          />
        </div>

        {errors.email?.type === "pattern" ? (
          <p className="text-red ml-5 md:ml-8">
            {t("validators.email-validation")}
          </p>
        ) : (
          errors.email?.type === "required" && (
            <p className="text-red ml-5 md:ml-8">
              {t("validators.required-validation")}
            </p>
          )
        )}
        <div className="flex">
          <input
            className="ml-5 md:ml-8 mb-6 mt-5 cursor-pointer"
            type="checkbox"
            {...register("disclaimer", {
              required: true,
            })}
          />
          {/*<Button onClick={handleClickOpen("paper")}>scroll=paper</Button>*/}

          <span
            onClick={handleClickOpen("paper")}
            className="ml-2 mb-6 mt-5 text-lavender underline cursor-pointer"
          >
            {t("form.terms")}
          </span>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">
              Términos y Condiciones de Uso
            </DialogTitle>
            <DialogContent dividers={scroll === "paper"}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <Terms />
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Listo</Button>
            </DialogActions>
          </Dialog>
        </div>
        {errors.disclaimer?.type === "required" && (
          <p className="text-red ml-5 md:ml-8">
            {t("validators.required-validation")}
          </p>
        )}

        <input
          className="ml-[120px] md:ml-32 mb-6 mt-5 py-4 px-4 hover:bg-orange bg-yellow rounded-lg text-lavender cursor-pointer"
          type="submit"
          value={t("form.access")}
        />
      </form>
    </div>
  );
};

export default Form;
