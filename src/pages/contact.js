import React, { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";

const MessageContext = React.createContext();

export default function Contact() {
  return (
    <Container className="text-white">
      <h2>Silahkan ketik yang ingin disampaikan</h2>
      <MessageProvider>
        <MessagesForm />
        <MessageList />
      </MessageProvider>
    </Container>
  );
}

function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
}

function MessagesForm() {
  const { messages, setMessages } = useContext(MessageContext);
  const [newMessages, setNewMessages] = useState("");

  const handleInputChange = (event) => {
    setNewMessages(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newMessages.trim()) return;

    const newMessageObject = {
      text: newMessages,
    };

    setMessages([...messages, newMessageObject]);
    setNewMessages("");
  };

  return (
    <Form>
      <Form.Group className="d-flex">
        <Form.Control
          type="text"
          onChange={handleInputChange}
          value={newMessages}
          placeholder="Type your message here"
        />
        <Button
          className="btn btn-primary text-white ml-2"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
}

function MessageList() {
  const { messages } = useContext(MessageContext);

  return (
    <>
      <h3 className="text-white">Info</h3>
      {messages.map((message, index) => (
        <p key={index}>{message.text}</p>
      ))}
    </>
  );
}
