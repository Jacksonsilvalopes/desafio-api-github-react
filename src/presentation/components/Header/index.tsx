
import { NavLink} from 'react-router-dom';

function Header() {
    return (
        <header className=" flex  justify-center items-center h-15.5 bg-primary">
            <div className="flex flex-row justify-between text-white  w-[90vw] h-7.5">
                <nav >
                    <NavLink to="/home" >
                    <p className="font-medium text-2xl">Github API</p>
                    </NavLink>                  
                </nav>            
            </div>
        </header>
    )
}

export default Header;