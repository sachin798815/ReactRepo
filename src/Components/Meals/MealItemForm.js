import classes from "./MealItemForm.module.css";

const MealItemForm=props=>{
    return(
        <form action="" className={classes.form}>
            <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" id="amount" min="0" max="5" defaultValue="1"/>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;