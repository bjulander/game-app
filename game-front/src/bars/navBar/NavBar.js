import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/scoreboard">Scoreboard</NavLink>
            <NavLink to="/about">About</NavLink>
        </>
    )
}