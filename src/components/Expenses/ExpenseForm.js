const ExpenseForm = ()=>{
 

    const displayer =(e)=>{
        e.preventDefault();
        console.log(e.target.value);
    } 

    return(
        <div>
            <form action="">
                <label htmlFor="dateInput">Expense date</label>
                <input type="date" id="dateInput" name="dateinput" onChange={displayer}/>
                <label htmlFor="titleInput">Expense title</label>
                <input type="text" id="titleInput" name="titleInput" onChange={displayer}/>
                <label htmlFor="expenseInput">Expense amount</label>
                <input type="number" id="expenseInput" name="expenseInput" onChange={displayer}/>
                <label htmlFor="locationInput">Expense location</label>
                <input type="text" id="locationInput" name="locationInput" onChange={displayer}/>
                <input type="submit" onClick={()=>{}} value="add"/>
            </form>
        </div>
    )
}

export default ExpenseForm;