const UserList = props => {
    return <ul>
        {props.UserList.map(user => <li>{user.name} </li>)}
    </ul>
}

export default UserList;