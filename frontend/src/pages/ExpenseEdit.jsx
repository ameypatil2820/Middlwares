import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';
import { useEffect } from 'react';

const ExpenseEdit = () => {
    const [editExp, setEditExp] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {

        const fetchExp = async () => {
            const res = await api.get(`/exp/efind/${id}`);
            setEditExp(res.data);
        }

        if (id) fetchExp();
    }, [id]);

    const handlerFunction = (e) => {
        setEditExp({
            ...editExp,
            [e.target.name]: e.target.value
        })
    }

    const submithandler = async (e) => {
        e.preventDefault();
        await api.put(`/exp/eupdate/${id}`, editExp);
        navigate('/dashbord')
    }

    return (
        <div>
            <h2>Edit Expense</h2>

            <form onSubmit={submithandler}>
                <div>
                    <label>Source
                        <input type="text" name="ex_source" onChange={handlerFunction} value={editExp.ex_source || ''} />
                    </label>
                </div>
                <div>
                    <label>Amount
                        <input type="text" name="ex_amount" onChange={handlerFunction} value={editExp.ex_amount || ''} />
                    </label>
                </div>
                <div>
                    <label>Date
                        <input type="text" name="ex_date" onChange={handlerFunction} value={editExp.ex_date || ''} />
                    </label>
                </div>
                <div>
                    <label>Time
                        <input type="text" name="ex_time" onChange={handlerFunction} value={editExp.ex_time || ''} />
                    </label>
                </div>
                <div>
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseEdit
