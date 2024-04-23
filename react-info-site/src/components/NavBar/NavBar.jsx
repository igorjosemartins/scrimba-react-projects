import './NavBar.css'
import react_logo from '../../assets/react-logo.png'

function NavBar() {
    return (
        <nav>
            <img className="nav--logo" src={react_logo} alt="React Logo" />

            <h3 className="nav--logo_text">ReactFacts</h3>

            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default NavBar