import { useState } from 'react'
import { api } from '../services/api';
import { Link, useNavigate } from 'react-router-dom';

const IncomePage = () => {
    const [income, setIncome] = useState({});

    const navigate = useNavigate();
    const handlerfunction = (e) => {
        setIncome({
            ...income,
            [e.target.name]: e.target.value
        })
    }

    const submithandler = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post('/income/str', income);
            console.log(res.data);

            navigate('/dashbord')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Add Income</h2>
            <Link to='/dashbord'>Cancel</Link>

            <form onSubmit={submithandler}>
                <div>
                    <label> Source
                        <input type="text" name='in_source' onChange={handlerfunction} value={income.in_source || ''} />
                    </label>
                </div>
                <div>
                    <label> Amount
                        <input type="number" name='in_amount' onChange={handlerfunction} value={income.in_amount || ''} />
                    </label>
                </div>
                <div>
                    <label> Date
                        <input type="date" name='in_data' onChange={handlerfunction} value={income.in_data || ''} />
                    </label>
                </div>
                <div>
                    <label>Time
                        <input type="time" name='in_time' onChange={handlerfunction} value={income.in_time || ''} />
                    </label>
                </div>
                <div>
                    <button type="submit">Add Income</button>
                </div>

            </form>
        </div>
    )
}

export default IncomePage
