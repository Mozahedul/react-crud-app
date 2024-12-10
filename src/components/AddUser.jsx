import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Form, FormGroup } from "react-bootstrap";
import { useStateValue } from "../context/GlobalState";
import "./AddUser.css";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const [user, setUser] = useState("");
  const [, dispatch] = useStateValue();
  const navigate = useNavigate();
  // console.log(user);

  const submitHandle = e => {
    e.preventDefault();
    if (user !== "") {
      dispatch({
        type: "ADD_TODO",
        item: {
          name: user,
          id: uuidv4(),
        },
      });
      navigate("/");
    } else {
      // alert("Put info first");
      document.getElementById("msg").innerHTML = "Fill the field first";
    }
  };
  return (
    <Container>
      <Form onSubmit={submitHandle}>
        <FormGroup>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            id="name"
            placeholder="Insert Text"
            value={user}
            onChange={event => setUser(event.target.value)}
          />
        </FormGroup>
        <div
          id="msg"
          style={{ fontWeight: "600", marginBottom: "10px", color: "red" }}
        ></div>

        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </Container>
  );
};

export default AddUser;
