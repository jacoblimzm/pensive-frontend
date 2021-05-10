import { useState } from "react";

const useForm = (initialFormValues) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
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
  const { handleSubmit } = props;
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      {props.children}
    </form>
  );
};
