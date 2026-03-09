import { Link, useNavigate } from 'react-router-dom'
import IncomeShow from './IncomeShow'
import { userRemoev } from '../services/api';

const Dashbord = () => {
    const navigate = useNavigate();

    const logoutHandler = () => {
        userRemoev();
        navigate('/')

    }


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
            <div>
                <button onClick={logoutHandler}>Logout</button>
            </div>
        </div>
    )
}

export default Dashbord
