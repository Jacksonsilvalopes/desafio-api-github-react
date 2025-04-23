import { Outlet } from "react-router-dom"
import Header from "../presentation/components/Header"



function Home() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Home