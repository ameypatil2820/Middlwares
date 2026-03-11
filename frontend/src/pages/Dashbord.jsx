import { Link, useNavigate } from 'react-router-dom'
import { api, userRemove } from '../services/api';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashbord = () => {
    const navigate = useNavigate();
    const [income, setincome] = useState([]);
    const [expense, setExpense] = useState([]);

    const logoutHandler = () => {
        userRemove();
        navigate('/')

    };
    const showIncom = async () => {
        try {
            const res = await api.get('/income/idx');
            setincome(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const showExpense = async () => {
        try {
            const ress = await api.get('/exp/eidx')
            setExpense(ress.data);
        } catch (error) {
            console.log(error);
        }
    }

    const totalIncome = income.reduce((tol, inc) => {
        return tol + Number(inc.in_amount);
    }, 0)

    const totalExpense = expense.reduce((total, expen) => {
        return total + Number(expen.ex_amount);
    }, 0)


    useEffect(() => {
        showIncom();
        showExpense();
    }, [])

    return (
        <div>
            <h2>Dashbord</h2>
            <div>
                <Link to='/income'>Add Income</Link>
            </div>
            <div>
                <h4>Total Income:{totalIncome}</h4>
            </div>
            <div>
                <Link to='/show'>Total Income</Link>
            </div>

            <div>
                <Link to="/expense">Add Expense</Link>
            </div>
            <div>
                <h4>Total Expanse: {totalExpense}</h4>
            </div>
            <div>
                <Link to="/eshow">Total Expense</Link>
            </div>
            <div>
                <button onClick={logoutHandler}>Logout</button>
            </div>

            <div>
                <h2>propfile</h2>
                <Link to="/profile">Profile</Link>
            </div>

        </div>
    )
}

export default Dashbord
