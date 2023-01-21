import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { BiCommentCheck, BiCommentX } from "react-icons/bi";


export const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name
    }
    addUser(newUser);
    history.push("/");
  }

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit"class="btn btn-success"><BiCommentCheck /></Button>
      <Link to="/" className="btn btn-danger ml-2"><BiCommentX /></Link>
    </Form>
  )
}
