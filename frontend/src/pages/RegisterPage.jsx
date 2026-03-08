import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api, userStore } from '../services/api';

const RegisterPage = () => {
    const [userData, setUserData] = useState({
        status: "user"
    });
    const navigate = useNavigate()

    const handlerfunction = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const submithandler = async (e) => {
        e.preventDefault()

        try {

            const useDAta = await api.post('/user/register', userData)
            console.log(useDAta.data);
            if (useDAta.data) {
                const tokan = useDAta.data.tokan;
                const userD = useDAta.data.data;
                userStore(tokan, userD)
                navigate('/login')
            }
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <h2>Register Page</h2>
            <Link to='/login'>Back</Link>

            <form onSubmit={submithandler}>
                <label> Name:
                    <input type="text" name='user_name' onChange={handlerfunction} value={userData.user_name || ''} />
                </label>

                <label>
                    <input type="email" name='user_email' onChange={handlerfunction} value={userData.user_email || ''} />
                </label>
                <label>
                    <input type="password" name='user_password' onChange={handlerfunction} value={userData.user_password || ''} />
                </label>

                <button type='submit'>Register</button>

            </form>

        </div>
    )
}

export default RegisterPage
