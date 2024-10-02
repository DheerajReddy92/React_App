import { Link } from 'react-router-dom';
import './navbar.css';
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className="navbar">
            <img style={{alignContent:'start'}} src={user?.photoURL || ""} alt="User" width="40" height="40" className="user-avatar" />
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">Home</Link>
                    <Link className="nav-item nav-link" to="/login">Login</Link>
                    <div className="user-info">
                        <p className="user-name">{user?.displayName}</p>
                        <img src={user?.photoURL || ""} alt="User" width="40" height="40" className="user-avatar" />
                    </div>
                    <button className="show-side-btn" data-show="sidebar" aria-label="Toggle Sidebar">
                        ☰
                    </button>
                </div>

        </nav>
    );
}
