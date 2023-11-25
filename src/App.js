import './App.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import DefaultComponents from "./components/MainPage/DefaultComponents";
import DisplayProducts from "./components/ChooseCategory/CurrentCategory/DisplayProducts/DisplayProducts";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import InformationOfProduct
    from "./components/ChooseCategory/CurrentCategory/DisplayProducts/Product/InformationOfProduct/InformationOfProduct";
function App() {
    useEffect(() => {
        Aos.init({once:true});
    }, []);
    const router = createBrowserRouter([
        {
            path:"/",
            element: <MainPage/>,
            children:[
                {
                    path:"/",
                    element: <DefaultComponents/>
                },
                {
                    path:"/category/:nameCategory",
                    element: <DisplayProducts/>
                },
                {
                    path:"/product/:id",
                    element: <InformationOfProduct/>
                }
            ]
        },
        {
            path: "*",
            element: <Navigate to={"/"}></Navigate>
        }
    ])

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
