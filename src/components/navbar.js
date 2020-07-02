import React, { useState, useEffect } from 'react'
import styles from '../style/navbar.module.css'
import logo from './soundzbaylogo.jpg'

const Navbar = () => {

    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setSrollPosition("navScrolled");
        } else {
            setSrollPosition('navbar')
        }
    };
        useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
  }, []);
      
    
    return (
        <nav className={styles.navbar} id={scrollPosition}>
                <img src={logo} width='140px' alt='logo' />
                <ul className={styles.navLinks}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Store</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><button className="header__checkout snipcart-checkout"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={40} height={40} viewBox="0 0 171 171" style={{fill: '#000000'}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} strokeDasharray strokeDashoffset={0} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,171.98906v-171.98906h171.98906v171.98906z" fill="none" /><g fill="#ff2a24"><path d="M12.02344,14.69531c-2.27109,0 -4.00781,1.73672 -4.00781,4.00781c0,2.27109 1.73672,4.00781 4.00781,4.00781h9.35156v98.85938c0,7.34766 6.01172,13.35938 13.35938,13.35938h66.79688c2.27109,0 4.00781,-1.73672 4.00781,-4.00781c0,-2.27109 -1.73672,-4.00781 -4.00781,-4.00781h-66.79687c-2.93906,0 -5.34375,-2.40469 -5.34375,-5.34375v-85.5h116.62839c1.73672,0 3.3388,0.80052 4.27396,2.27005c1.06875,1.46953 1.33594,3.20834 0.66797,4.81146l-18.3013,55.03958c-2.00391,6.01172 -7.48177,10.01953 -13.89427,10.01953h-74.67943c-2.27109,0 -4.00781,1.73672 -4.00781,4.00781c0,2.27109 1.73672,4.00781 4.00781,4.00781h74.67943c9.75234,0 18.43542,-6.27838 21.50807,-15.49635l18.3013,-55.04219c1.33594,-4.14141 0.67005,-8.55 -1.86823,-12.02344c-2.53828,-3.47344 -6.54818,-5.60989 -10.82318,-5.60989h-116.49271v-9.35156c0,-2.27109 -1.73672,-4.00781 -4.00781,-4.00781zM34.73438,142.94531c-7.34766,0 -13.35937,6.01172 -13.35937,13.35938c0,7.34766 6.01172,13.35938 13.35938,13.35938c7.34766,0 13.35938,-6.01172 13.35938,-13.35937c0,-7.34766 -6.01172,-13.35937 -13.35937,-13.35937zM101.53125,142.94531c-7.34766,0 -13.35937,6.01172 -13.35937,13.35938c0,7.34766 6.01172,13.35938 13.35938,13.35938c7.34766,0 13.35938,-6.01172 13.35938,-13.35937c0,-7.34766 -6.01172,-13.35937 -13.35937,-13.35937zM34.73438,150.96094c2.93906,0 5.34375,2.40469 5.34375,5.34375c0,2.93906 -2.40469,5.34375 -5.34375,5.34375c-2.93906,0 -5.34375,-2.40469 -5.34375,-5.34375c0,-2.93906 2.40469,-5.34375 5.34375,-5.34375zM101.53125,150.96094c2.93906,0 5.34375,2.40469 5.34375,5.34375c0,2.93906 -2.40469,5.34375 -5.34375,5.34375c-2.93906,0 -5.34375,-2.40469 -5.34375,-5.34375c0,-2.93906 2.40469,-5.34375 5.34375,-5.34375z" /></g></g></svg>
                    <span className="snipcart-items-count">0</span>
                    </button>
                    
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar   