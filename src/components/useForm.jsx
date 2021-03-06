import { useState } from "react";

const useForm = (initialFormValues) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
      breaking: checked,
    });
  };

  const handleReset = () => {
    setFormValues(initialFormValues);
  };

  return {
    formValues,
    setFormValues,
    handleInputChange,
    handleReset,
  };
};

const Form = (props) => {
  const { handleSubmit } = props; // accepts a handleSubmit prop from any Component which uses the reusable Form component
  return (
    <form className="row justify-content-center" autoComplete="off" onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
};


export {
    useForm,
    Form,
}