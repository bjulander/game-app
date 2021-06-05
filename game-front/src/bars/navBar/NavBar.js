import {NavLink} from 'react-router-dom'


export default function NavBar() {
    return (
        <>  
            <span>
                <NavLink to="/">Home</NavLink>
            </span>
            <NavLink to="/scoreboard">Scoreboard</NavLink>
            <NavLink to="/about">About</NavLink>
        </>
    )
}