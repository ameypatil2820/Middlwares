import { Route, Routes, useNavigate } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"
import LogianPage from "../pages/LogianPage"
import Dashbord from "../pages/Dashbord"
import { useEffect } from "react"

const CommanRoutes = () => {
    const navigate = useNavigate()
    const token = sessionStorage.getItem("token")

    useEffect(() => {
        if (token) {
            navigate('/dashbord')
        } else {
            navigate('/login')
        }
    },[token]);
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LogianPage />} />
                <Route path="/dashbord" element={<Dashbord />} />
            </Routes>
        </div>
    )
}

export default CommanRoutes
