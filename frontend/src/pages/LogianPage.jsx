import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../services/api"

const LogianPage = () => {

    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate()

    const handlerfunction = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const submithandler = async (e) => {
        e.preventDefault()
        try {
            const res = await api.post('/user/login', loginData)
            sessionStorage.setItem("token", res.data.token);
            
            navigate('/dashbord')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <Link to='/register'>Back</Link>

            <form onSubmit={submithandler}>
                <label>Email
                    <input type="email" name="user_email" onChange={handlerfunction} value={loginData.user_email || ''} />
                </label>
                <label>
                    <input type="password" name="user_password" onChange={handlerfunction} value={loginData.user_password || ''} />
                </label>
                <button type="submit">Login</button>

            </form>


        </div>
    )
}

export default LogianPage
