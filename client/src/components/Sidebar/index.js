import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/mylogo.png'

import LogoSubtitle from '../../assets/images/mylogosub.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Sidebar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='Logo'/>
                <img className='sub-logo' src={LogoSubtitle} alt='Manan'/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4de' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4de' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4de' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/manan-agarwal-12a135289/'>
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/MananAgarawal'>
                         <FaGithub />
                    </a>
                </li>
            </ul>
        </div>
    );
}


export default Sidebar;