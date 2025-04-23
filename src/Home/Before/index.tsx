import { Outlet } from "react-router-dom"
import SubHeader from "../../presentation/components/SubHeader"


function Before() {
    return (
        <>
            <main className=" flex-col justify-self-center my-5" >
                <SubHeader />
                <Outlet />
            </main>
        </>
    )
}

export default Before