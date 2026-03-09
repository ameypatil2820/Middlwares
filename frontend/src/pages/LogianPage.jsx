import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api, userStore } from "../services/api"

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
            if (res.data.user) {
                const token = res.data.token;
                const userData = res.data.user;
                userStore(token, userData);
                navigate('/dashbord')
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <h2>Login Page</h2>
            <Link to='/register'>Back</Link>

            <form onSubmit={submithandler}>
                <div>
                    <label>Email
                        <input type="email" name="user_email" onChange={handlerfunction} value={loginData.user_email || ''} />
                    </label>
                </div>
                <div>
                    <label>
                        <input type="password" name="user_password" onChange={handlerfunction} value={loginData.user_password || ''} />
                    </label>
                </div>
                <button type="submit">Login</button>

            </form>


        </div>
    )
}

export default LogianPage
