import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"
import {useState} from 'react';


const AddUser=props=>{
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError] = useState();


    const addUserHandler=(e)=>{
        e.preventDefault();
        if(enteredUsername.trim().length===0||enteredAge.trim().length===0){
            setError({
                title:'Invalid input',
                message:'Please fill all fields'
            }
            )
            return;
        }
        else if(+enteredAge<1){
            setError({
                title: "Invalid age",
                message:"Enter a valid number greater than 0."
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangeHandler=(e)=>{
        setEnteredUsername(e.target.value);
    }

    const ageChangeHandler=(e)=>{
        setEnteredAge(e.target.value);
    }

    const errorHandler=(e)=>{
        setError(undefined);
    }

    return(
        <Wrapper>
        {error&&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <Card classCustom={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername}/>
            <label htmlFor="age">Age in years</label>
            <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser;