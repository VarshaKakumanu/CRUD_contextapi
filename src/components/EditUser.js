import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import { BiCommentCheck, BiCommentX } from "react-icons/bi";

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    name: ''
  })
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={selectedUser.name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
      </FormGroup>
      <Button type="submit" class="btn btn-success" ><BiCommentCheck /></Button>
      <Link to="/" className="btn btn-danger ml-2"><BiCommentX /></Link>
    </Form>
  )
}
