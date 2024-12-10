import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useStateValue } from "../context/GlobalState";

const UserList = ({ name, id }) => {
  const [, dispatch] = useStateValue();
  const removeUser = () => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const editUser = () => {
    dispatch({
      type: "EDIT_USER",
      payload: {
        name,
        id,
      },
    });
  };

  return (
    <ListGroup style={{ margin: "4px 0" }}>
      <ListGroupItem className="d-flex justify-content-between">
        <strong>{name}</strong>
        <div className="ml-auto">
          <Link
            // onClick={readUser}
            className="btn btn-success btn-sm mr-1"
            to={`/read/${id}`}
          >
            View
          </Link>
          <Link
            onClick={editUser}
            className="btn btn-warning btn-sm mr-1 mx-1"
            to={`/edit/${id}`}
          >
            Edit
          </Link>
          <button onClick={removeUser} className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </ListGroupItem>
    </ListGroup>
  );
};

export default UserList;
