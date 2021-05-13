import { useContext, useEffect, useState } from "react";
import { Form, useForm } from "../components/useForm";
import { UserContext } from "../context/UserProvider";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useParams } from "react-router";

const ChatRoom = () => {
  // creating a state for the client object so only one session over the websocket is instantised upon page load
  // useEffect fires only once upon load.
  const [clientState, setClientState] = useState(null);
  const userContext = useContext(UserContext);
  const [chatState, setChatState] = useState([]);
  const { roomName } = useParams();

  const initialValues = {
    message: "",
  };
  const { formValues, setFormValues, handleInputChange } =
    useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    clientState.send(
      JSON.stringify({
        name: "Jacob",
        message: formValues.message,
      })
    );

    setFormValues(initialValues);
  };

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
        setChatState((prevValues) => {
        return [
            ...prevValues, {
                name: serverData.name,
                message: serverData.message,
            }
        ]
            //   return {
        //     messages: [...prevValues.messages, serverData.message],
        //   };
        });
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6">
          <p className="mb-3">Room Name: {roomName}</p>
        </div>
        {/* small hack to break to a new line */}
        <div className="w-100"></div>
        <div className="col-sm-8 col-md-6 chat-window rounded bg-white py-3">
          {chatState[0] && chatState.map((message, index) => {
            return (
              <p key={index} className="chat-bubble">
                <span>{message.name}: </span> {message.message}
              </p>
            );
          })}
        </div>
      </div>
      <Form handleSubmit={handleSubmit}>
        <div className="col-sm-8 col-md-4 my-2">
          <input
            type="text"
            name="message"
            className="form-control"
            value={formValues.message}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-sm-8 col-md-2 my-2">
          <input
            type="submit"
            name="submit"
            className="form-control"
            value="Send"
          />
        </div>
      </Form>
    </div>
  );
};

export default ChatRoom;
