import { useStateValue } from "../context/GlobalState";
import Heading from "./Heading";
import UserList from "./UserList";

const Home = () => {
  const [{ todoList }] = useStateValue();
  return (
    <div className="Home" style={{ maxWidth: "600px", minWidth: "350px" }}>
      <Heading />
      {todoList.map(listValue => (
        <UserList key={listValue.id} name={listValue.name} id={listValue.id} />
      ))}
    </div>
  );
};

export default Home;
