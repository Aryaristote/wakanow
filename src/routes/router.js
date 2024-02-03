import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
import UserDetail from '../Pages/User';

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/user-details/:id" element={<UserDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;
