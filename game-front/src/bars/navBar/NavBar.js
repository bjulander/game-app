import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/scoreboard">Scoreboard</Link>
            <Link to="/about">About</Link>
        </>
    )
}