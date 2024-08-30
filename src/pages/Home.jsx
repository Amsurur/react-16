import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
    },
  });
  function add(values) {
    console.log(values);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(add)} action="">
        <input
          placeholder="fullName"
          {...register("fullName", {
            required: "Please enter your fullName",
            minLength: { message: "minimum 2 letter", value: 2 },
          })}
          name="fullName"
          type="text"
        />
        <p>{errors.fullName && errors.fullName.message}</p>
        <input
          placeholder="email"
          {...register("email", { required: "Please enter your email" })}
          name="email"
          type="text"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Home;
