import { Route, Routes } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"
import LogianPage from "../pages/LogianPage"
import Dashbord from "../pages/Dashbord"

const CommanRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<RegisterPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LogianPage />} />
                <Route path="/dashbord" element={<Dashbord/>}/>
            </Routes>
        </div>
    )
}

export default CommanRoutes
