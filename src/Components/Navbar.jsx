import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <span className="nav-bar">
                <Link to='/'>All</Link>
                <Link to='/Fullstack'>Full Stack Development</Link>
                <Link to='/DataScience'>Data Science</Link>
                <Link to='/CyberSecurity'>Cyber Security</Link>
                <Link to='/Career'>Career</Link>
            </span>
        </>
    )
}

export default NavBar