import {NavLink} from 'react-router-dom'


export default function NavBar() {
    return (
        <>  
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
                <NavLink to="/scoreboard">Scoreboard</NavLink>
            </div>
            <div>
                <NavLink to="/about">About</NavLink>
            </div>
        </>
    )
}