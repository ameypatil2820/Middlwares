import { Route, Routes, useNavigate } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"
import LogianPage from "../pages/LogianPage"
import Dashbord from "../pages/Dashbord"
import { useEffect } from "react"
import IncomePage from "../pages/IncomePage"
import IncomeEditPage from "../pages/IncomeEditPage"
import IncomeShow from "../pages/IncomeShow"
import ExpenseCreate from "../pages/ExpenseCreate"
import ExpenseShow from "../pages/ExpenseShow"
import ExpenseEdit from "../pages/ExpenseEdit"
import ProfilePage from "../pages/ProfilePage"


const CommanRoutes = () => {
    const navigate = useNavigate()
    const token = sessionStorage.getItem("token")

    useEffect(() => {
        if (token) {
            navigate('/dashbord')
        } else {
            navigate('/login')
        }
    }, [token]);

    return (
        <div>
            <Routes>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LogianPage />} />
                <Route path="/income" element={<IncomePage />} />
                <Route path="/show" element={<IncomeShow />} />
                <Route path="/edit/:id" element={<IncomeEditPage />} />
                <Route path="/expense" element={<ExpenseCreate />} />
                <Route path="/eshow" element={<ExpenseShow />} />
                <Route path="/expedit/:id" element={<ExpenseEdit />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/dashbord" element={<Dashbord />} />
            </Routes>
        </div>
    )
}

export default CommanRoutes
