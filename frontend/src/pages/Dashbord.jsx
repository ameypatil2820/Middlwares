import { Link } from 'react-router-dom'
import IncomeShow from './IncomeShow'

const Dashbord = () => {


    return (
        <div>
            <h2>Dashbord</h2>
            <Link to='/income'>Add Income</Link>
            <div>
                <Link to='/show'>Total Income</Link>
            </div>

            <div>
                <Link to="/expense">Add Expense</Link>
            </div>
            <div>
                <Link to="/eshow">Total Expense</Link>
            </div>
        </div>
    )
}

export default Dashbord
