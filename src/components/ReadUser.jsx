import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import { useStateValue } from "../context/GlobalState";

const ReadUser = () => {
  const [{ todoList }, dispatch] = useStateValue();
  const param = useParams();

  const removeUser = () => {
    dispatch({
      type: "REMOVE_USER",
      payload: param.id,
    });
  };

  return (
    <div>
      {todoList.map(item =>
        item.id === param.id ? (
          <Jumbotron key={item.id}>
            <Link to="/" className="btn btn-info mb-4">
              Home
            </Link>
            <h2>Individual User: </h2>
            <h3>User Name: {item.name}</h3>
            <h5>
              User ID: <small>{item.id}</small>
            </h5>
            <div className="d-flex mt-4">
              <Link
                className="btn btn-primary btn-sm mr-2"
                to={`/edit/${item.id}`}
              >
                Edit
              </Link>
              <Link
                to="/"
                onClick={removeUser}
                className="btn btn-danger btn-sm"
              >
                Delete
              </Link>
            </div>
          </Jumbotron>
        ) : (
          (item = "")
        )
      )}
    </div>
  );
};

export default ReadUser;
