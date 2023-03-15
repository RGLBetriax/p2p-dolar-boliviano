import { useForm } from "react-hook-form";
import Scene2 from "../../icons/Scene2";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-blueLight w-screen h-screen" id="form">
      {/*<Scene2 />*/}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label>Name *</label>
        <input type="text" placeholder="Enter your name" />
        <label>Lastname *</label>
        <input type="text" placeholder="Enter your lastname" />
        <label>Email *</label>
        <input type="text" placeholder="Enter your email" />
        <input type="checkbox" />
        <span>I Agree to the Terms & Conditions</span>

        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
};

export default Form;
