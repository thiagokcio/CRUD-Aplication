import React from "react";
import Message from "../Message/message";
import { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setId] = useState(null);


  const [messageContent, setMessageContent] = useState("")

  useEffect(() => {
    setId(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateAPIData = () => {
    axios.put(`https://63a8e20a100b7737b9867a85.mockapi.io/fakeData/${id}`, {
      firstName,
      lastName,
      checkbox,
    })
    setFirstName("")
    setLastName("")
    setCheckbox(false)
    setMessageContent("Dado alterado com sucesso!");
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
      <Message content={messageContent}></Message>
    </div>
  );
};

export default Update;
