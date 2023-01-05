import React, { useState } from "react";
import Message from "../Message/message";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "./create.css"
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [messageContent, setMessageContent] = useState("")

  const postData = () => {
    
      axios.post("https://63a8e20a100b7737b9867a85.mockapi.io/fakeData", {
        firstName,
        lastName,
        checkbox,
      })
      setFirstName("")
      setLastName("")
      setCheckbox(false)
      setMessageContent('Dado adicionado com sucesso!')
    }  
    
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={(event) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>
      <Message content={messageContent}></Message>
    </div>
  );
}
