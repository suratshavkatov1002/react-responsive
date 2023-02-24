import { useEffect, useRef } from 'react'
import './Header.css'


const nav__links = [
    {
        path: '#home',
        display: 'Home'
    },

    {
        path: '#about',
        display: 'About'
    },

    {
        path: '#service',
        display: 'Service'
    },

    {
        path: '#projects',
        display: 'Projects'
    },

    {
        path: '#blog',
        display: 'Blog'
    }
]

export default function Header({theme, toogleTheme}) {

    const headerRef = useRef(null); 
    const menuRef = useRef(null);

    const toggleMenu = () => {
        menuRef.current.classList.toggle("menu__active")
    }

    const  headerFunc = () => {
        if(document.body.scrollTop > 80 ||  document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('header__shrink')
        }else{
            headerRef.current.classList.remove('header__shrink')
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', headerFunc);

       
        return() =>  window.addEventListener('scroll', headerFunc);
    }, [])

    return(
        <header className='header' ref={headerRef}>
            <div className="container">
                <div className="naw__wraper">
                    <div className="logo">
                        <h2>Digency</h2>
                    </div>

                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className='navigation__list'>
                            {
                               nav__links.map((item, index) => (
                                <li key={index} className='navigation__item'>
                                    <a className='menu__link' href={item.path}>{item.display}</a>
                                </li>
                               )) 
                            }
                        </ul>
                    </div>

                    <div className="light__mode">
                        <span onClick={toogleTheme}>

                            {
                                theme === 'light-theme' ? (
                                    <span>
                                        <i className='ri-moon-line'></i> Dark
                                    </span>
                                ) : (
                                    <span>
                                        <i className='ri-sun-line'></i> Light
                                    </span>
                                )
                            }
                        </span>
                    </div>

                    <span className='mobile__menu' onClick={toggleMenu}>
                        <i className="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </header>
    )
}