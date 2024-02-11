import {Link, Navigate, useNavigate} from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to : '/', text: 'Login' },
  { to : '/register', text: 'Register' },
]

const userNav = [
  { to : '/', text: 'Home' },
  { to : '/new', text: 'Create Product' },
]



export default function Header() {
  const {user,logout} = useAuth()
  const finalNav = user?.id ? userNav : guestNav

    const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <div className="navbar bg-base-100 flex flex-col items-end">
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          { finalNav.map( el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          { user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout}>Logout</Link>
            </li>
          ) }
        </ul>
      </div>
    </div>
  );
}