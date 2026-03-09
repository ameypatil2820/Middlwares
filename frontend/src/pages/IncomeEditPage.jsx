import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { api } from '../services/api';

const IncomeEditPage = () => {
    const [editIncome, setEditIncome] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchIncome = async () => {
            try {
                const res = await api.get(`/income/fnd/${id}`)
                setEditIncome(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        if (id) {
            fetchIncome();
        }

    }, [id]);

    const handlerFunction = (e) => {
        setEditIncome({
            ...editIncome,
            [e.target.name]: e.target.value
        })
    };

    const submoitHandler = async (e) => {
        e.preventDefault();
        try {
            await api.put(`/income/upd/${id}`, editIncome);
            navigate('/dashbord')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Edit Income</h2>
            <Link to="/dashbord">Back</Link>

            <form onSubmit={submoitHandler}>
                <div>
                    <label>Source
                        <input type="text" name='in_source' onChange={handlerFunction} value={editIncome.in_source || ''} />
                    </label>
                </div>
                <div>
                    <label>Amount
                        <input type="number" name='in_amount' onChange={handlerFunction} value={editIncome.in_amount || ''} />
                    </label>
                </div>
                <div>
                    <label>Source
                        <input type="date" name='in_data' onChange={handlerFunction} value={editIncome.in_data || ''} />
                    </label>
                </div>
                <div>
                    <label>Source
                        <input type="time" name='in_time' onChange={handlerFunction} value={editIncome.in_time || ''} />
                    </label>
                </div>
                <div>
                    <button type="submit">Update Income</button>
                </div>
            </form>
        </div>
    )
}

export default IncomeEditPage
