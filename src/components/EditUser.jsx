import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Container, Button, Form, FormGroup } from "react-bootstrap";
import { useStateValue } from "../context/GlobalState";

const EditUser = () => {
  const [editInput, setEditInput] = useState("");
  const [{ todoList }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const params = useParams();
  console.log(params);
  console.log(editInput);

  const updateHandle = event => {
    event.preventDefault();
    if (editInput !== "") {
      dispatch({
        type: "EDIT_USER",
        payload: {
          name: editInput,
          id: params.id,
        },
      });
      setEditInput("");
      navigate("/");
    } else {
      navigate("/");
    }
  };

  return (
    <Container>
      {todoList.map(item =>
        item.id === params.id ? (
          <Form key={item.id} onSubmit={updateHandle}>
            <FormGroup>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                type="text"
                onChange={event => setEditInput(event.target.value)}
                defaultValue={item.name}
              />
            </FormGroup>

            <Button type="submit">Update</Button>

            <Link to="/" className="btn btn-danger ml-2">
              Cancel
            </Link>
          </Form>
        ) : (
          (item = "")
        )
      )}
    </Container>
  );
};

export default EditUser;
