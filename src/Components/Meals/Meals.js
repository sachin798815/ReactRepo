import { Fragment } from "react"
import Summary from "./Summary"
import AvailableMeals from "./AvailableMeals"

const Meals =props=>{
    return(
        <Fragment>
            <Summary></Summary>
            <AvailableMeals></AvailableMeals>
        </Fragment>
    )
}

export default Meals;