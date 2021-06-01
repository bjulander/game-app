import {Link} from 'react-router-dom'


export default function NavBar() {
  return (
      <>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Game</Link>
          {/* <Link to="/lists/new">New List</Link> */}
      </>
  )
}