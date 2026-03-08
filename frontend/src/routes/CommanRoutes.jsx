import { Route, Routes } from "react-router-dom"
import RegisterPage from "../pages/RegisterPage"
import LogianPage from "../pages/LogianPage"

const CommanRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<LogianPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    )
}

export default CommanRoutes
