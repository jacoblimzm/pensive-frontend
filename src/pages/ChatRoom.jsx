import { useContext, useEffect, useState } from "react";
import { Form, useForm } from "../components/useForm";
import { UserContext } from "../context/UserProvider";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const ChatRoom = () => {
  // creating a state for the client object so only one session over the websocket is instantised upon page load
  // useEffect fires only once upon load.
  const [clientState, setClientState] = useState(null);
  const userContext = useContext(UserContext);
  const [chatState, setChatState] = useState({
    messages: [],
  });

  const initialValues = {
    message: "",
  };
  const { formValues, handleInputChange } = useForm(initialValues);

  useEffect(() => {
    const client = new W3CWebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);
    setClientState(client);

    client.onerror = () => {
      console.log("Connection Error");
    };
    // open a connection to the websocket server
    client.onopen = () => {
      console.log("Websocket Client Connected!!!");
    };

    // since the connection is open as long as the page is loaded, need to receive messages which are routed from clients
    client.onmessage = (message) => {
      const serverData = JSON.parse(message.data);
      if (serverData) {
        setChatState( prevValues => {
            return {
                messages: [
                    ...prevValues.messages, serverData.message
                ]
            }
        })
      }
    };
  }, []);

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
