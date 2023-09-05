import Card from "../UI/Card";
import classes from "./UsersList.module.css"

const UsersList=props=>{
    return(
        <Card classCustom={classes.users}>
        <ul>
            {props.users.map((user=>{
               return <li key={user.id}>{user.name} ({user.age} years old) {user.college}</li>
            }))}
        </ul>
        </Card>
    )
}

export default UsersList;