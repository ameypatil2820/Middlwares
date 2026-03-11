import { useState } from 'react'
import { api } from '../services/api';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ExpenseShow = () => {
    const [expShow, setExpShow] = useState([]);

    const showExpense = async () => {
        try {
            const res = await api.get('/exp/eidx');
            setExpShow(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteHandler = async (id) => {        
        try {
            await api.delete(`/exp/edelete/${id}`);
            showExpense();
        } catch (error) {
            console.log(error);
        }
    }

    const totalExpense = expShow.reduce((total,expense)=>{
        return total + Number(expense.ex_amount);
    },0)

    useEffect(() => {
        showExpense();
    }, []);

    return (
        <div>
            <Link to='/expense'>Add Expense</Link>
             <h3>total:{totalExpense}</h3>
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
                    {
                        expShow.map((data, idx) => (
                            <tr key={data.id}>
                                <td>{idx + 1}</td>
                                <td>{data.ex_source}</td>
                                <td>{data.ex_amount}</td>
                                <td>{data.ex_date}</td>
                                <td>{data.ex_time}</td>
                                <td>
                                    <Link to={`/expedit/${data.id}`}>Edit</Link>
                                    <button onClick={() => deleteHandler(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseShow
