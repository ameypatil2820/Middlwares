import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";


const ExpenseCreate = () => {

    const [expense, setExpense] = useState({});
    const navigate = useNavigate();

    const handlerFunction = (e) => {
        setExpense({
            ...expense,
            [e.target.name]: e.target.value
        })
    }

    const submithandler = async (e) => {
        e.preventDefault();

        try {
            await api.post('/exp/estore', expense);
            navigate('/dashbord');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Add Expense</h2>
            <Link to='/dashbord'>Cancel</Link>

            <form onSubmit={submithandler}>
                <div>
                    <label>Source
                        <input type="text" name="ex_source" onChange={handlerFunction} />
                    </label>
                </div>
                <div>
                    <label>Amount
                        <input type="number" name="ex_amount" onChange={handlerFunction} />
                    </label>
                </div>
                <div>
                    <label>Date
                        <input type="date" name="ex_date" onChange={handlerFunction} />
                    </label>
                </div>
                <div>
                    <label>Time
                        <input type="time" name="ex_time" onChange={handlerFunction} />
                    </label>
                </div>

                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseCreate
