import React from "react";
import Message from "../Message/message";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableCell, TableRow, Button } from "semantic-ui-react";

const Read = () => {

  const [APIData, setAPIData] = useState([]);

  const getData = () => {
    axios
      .get("https://63a8e20a100b7737b9867a85.mockapi.io/fakeData")
      .then((response) => setAPIData(response.data));
  };

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
  }

  const remove = (id) => {
    axios
      .delete(`https://63a8e20a100b7737b9867a85.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (APIData.length > 0) {
    return (
      <div>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>Checked</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {APIData.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.firstName}</TableCell>
                  <TableCell>{data.lastName}</TableCell>
                  <TableCell>{data.checkbox ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    <Link to="/update">
                      <Button onClick={() => setData(data)} color="blue">
                        Update
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => remove(data.id)} color="red">
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    ) 
  } else {
    return (
      <Message content='Sem dados salvos!'></Message>
    )
  }
};

export default Read;
