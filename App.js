import React from "react";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("lastName", {
            required: "username required",
            minLength: {
              value: 5,
              message: "username must be at least minimum 5 characters",
            },
            maxLength: {
              value: 150,
              message: "username must be at atmost  150 characters",
            },
          })}
          placeholder="lastname"
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
