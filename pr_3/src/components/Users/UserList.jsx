import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.UserList.map((user) => (
          <li>
            {user.name} {user.age} years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
