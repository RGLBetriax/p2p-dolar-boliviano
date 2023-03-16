/* eslint-disable no-useless-escape */
import { useForm } from "react-hook-form";
import Scene1 from "../../icons/Scene1";
import { useTranslation } from "react-i18next";

const Form = () => {
  const [t] = useTranslation("global");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <div className="bg-blueLight w-full flex" id="form">
      <div className="ml-60">
        <Scene1 />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[400px] h-[650px] rounded-2xl shadow-xl mt-28"
      >
        <h2 className="text-lavender text-3xl font-medium mb-2 pl-8 pt-8">
          {t("form.suscription")}
        </h2>
        <h3 className="text-lavender text-sm mb-2 pl-8">{t("form.info")}</h3>
        <div>
          <input
            className="border border-gray-400 rounded mb-4 ml-8 mt-6 p-3 w-[330px] "
            type="text"
            placeholder={t("form.name")}
            {...register("name", { required: true, maxLength: 15 })}
          />
          {errors.name?.type === "required" && (
            <p className="text-red ml-8">
              {t("validators.required-validation")}
            </p>
          )}
          <input
            className="border border-gray-400 rounded mb-4 ml-8 mt-6 p-3 w-[330px]"
            type="text"
            placeholder={t("form.lastname")}
            {...register("lastname", { required: true, maxLength: 15 })}
          />
          {errors.name?.type === "required" && (
            <p className="text-red ml-8">
              {t("validators.required-validation")}
            </p>
          )}
        </div>
        <div>
          <input
            className="border border-gray-400 rounded mb-4 ml-8 mt-6 p-3 w-[330px]"
            type="text"
            placeholder={t("form.email")}
            {...register("email", {
              pattern: regex,
              required: true,
            })}
          />
        </div>

        {errors.email?.type === "pattern" ? (
          <p className="text-red ml-8">{t("validators.email-validation")}</p>
        ) : (
          errors.email?.type === "required" && (
            <p className="text-red ml-8">
              {t("validators.required-validation")}
            </p>
          )
        )}
        <div className="flex">
          <input
            className="ml-8 mb-6 mt-5 cursor-pointer"
            type="checkbox"
            {...register("checkbox", {
              required: true,
            })}
          />
          <span className="ml-2 mb-6 mt-5 text-lavender underline">
            {t("form.terms")}
          </span>
        </div>
        {errors.checkbox?.type === "required" && (
          <p className="text-red ml-8">{t("validators.required-validation")}</p>
        )}

        <input
          className="ml-8 mb-6 mt-5 py-3 px-3 bg-yellow rounded-lg text-lavender cursor-pointer"
          type="submit"
          value={t("form.submit")}
        />
      </form>
    </div>
  );
};

export default Form;
