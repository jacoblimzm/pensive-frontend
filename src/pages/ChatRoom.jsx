import { useContext } from "react";
import { Form, useForm } from "../components/useForm";
import { UserContext } from "../context/UserProvider";

const ChatRoom = () => {
  const userContext = useContext(UserContext);

  const initialValues = {
    message: "",
  };
  const { formValues, handleInputChange } = useForm(initialValues);


  
  return (
    <main className="container form-container">
      <Form handleSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
        />
        <input type="submit" name="submit" value="Send" />
      </Form>
    </main>
  );
};

export default ChatRoom;
