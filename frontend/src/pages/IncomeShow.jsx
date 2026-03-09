import { useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import { useEffect } from 'react';

const IncomeShow = () => {

    const [showIncome, setShowIncome] = useState([]);

    const fetchIncome = async () => {
        try {
            const res = await api.get('/income/idx');
            setShowIncome(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteHandler = async (id) => {
        try {
            await api.delete(`/income/del/${id}`);
            fetchIncome();
        } catch (error) {
            console.log(error);
        }
    }

    const totalAmout = showIncome.reduce((tol, inc) => {
        return tol + Number(inc.in_amount);
    }, 0)


    useEffect(() => {
        fetchIncome();
    }, [])


    return (
        <div>

            <Link to='/income'>Add Income</Link>
            <Link to='/dashbord'>Back</Link>
            <h3>total:{totalAmout}</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Source</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showIncome.map((data, idx) => (
                        <tr key={data.id}>
                            <td>{idx + 1}</td>
                            <td>{data.in_source}</td>
                            <td>{data.in_amount}</td>
                            <td>{data.in_data}</td>
                            <td>{data.in_time}</td>
                            <td>
                                <Link to={`/edit/${data.id}`}>Edit</Link>
                                <button onClick={() => deleteHandler(data.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default IncomeShow
