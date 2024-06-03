import React from "react";
import { useForm } from "react-hook-form";

export default function FormPage1() {
  // handleSubmit - פונ שנזמן בהאזנה לטופס ונעביר לה פונ נוספת שתקבל את המידע כאובייקט לפי רגיסטר שנשים בכל אינפוט / סלקט בוקס
  // gatValues - מאפשר לאסוף מידע מאינפוט שעשינו ךו רגיסטר ויעזור בהשוואה בין 2 אינפוטים
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSub = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>Form signup</h1>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6">
        <label>Name:</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          type="text"
          className="form-control"
        />
        {errors.name && (
          <div className="text-danger">* Enter valid name(min 2 chars)</div>
        )}

        <label>Phone:</label>
        <input
          {...register("phone", { required: true, minLength: 9 })}
          type="text"
          className="form-control"
        />
        {errors.phone && (
          <div className="text-danger">* Enter valid phone(min 9 chars)</div>
        )}

        <label>Phone again:</label>
        <input
          {...register("phone2", {
            required: true,
            validate: (val) => val == getValues("phone"),
          })}
          type="text"
          className="form-control"
        />
        {errors.phone2 && <div className="text-danger">* Phones not match</div>}

        <label>Email:</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          type="text"
          className="form-control"
        />
        {errors.email && <div className="text-danger">* Enter valid email</div>}
        <button className="btn btn-info mt-4">Send</button>
      </form>
    </div>
  );
}
