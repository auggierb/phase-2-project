import { NavLink } from "react-router-dom";
function NavBar(){
    return ( <div>
        <NavLink 
        to='/'
        exact>
            Home
        </NavLink>
        <NavLink to='/About'
        exact>
            About
        </NavLink>
        <NavLink to='/Search'
        exact>
            Search
        </NavLink>
        <NavLink to='/Tv'
        exact>
            Tv
        </NavLink>
    </div>)
}
export default NavBar