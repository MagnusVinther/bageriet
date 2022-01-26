import { Routes, Route } from "react-router-dom";
import navArr from "../../assets/Data/navArr";

export const AppRouter = () => {
    
    return (
        <Routes>
            {navArr.map((item, key) => {
                return (
                    <Route key={key} path={item.path} element={item.element} />
                )
            })}
        </Routes>
    )
}