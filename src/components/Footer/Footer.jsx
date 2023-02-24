import './Footer.css'

const quickLinks01 = [
    {
        path: '#',
        display: 'Marketing',
    },

    {
        path: '#',
        display: 'Analyitic',
    },

    {
        path: '#',
        display: 'Nimadir',
    },
]


const quickLinks02 = [
    {
        path: '#',
        display: 'Pricing',
    },

    {
        path: '#',
        display: 'Documentation',
    },

    {
        path: '#',
        display: 'Guedes',
    },
]

const quickLinks03 = [
    {
        path: '#about',
        display: 'About',
    },

    {
        path: '#job',
        display: 'Jobs',
    },

    {
        path: '#blog',
        display: 'Blog',
    },
]
export default function Footer() {

    const data = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logo">
                        <h2>Digence</h2>
                        
                        <p className="description">
                            Grow with us
                        </p>

                        <p className='small__text description'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem error quos vitae? Obcaecati explicabo vitae adipisci ratione beatae quasi!</p>
                    </div>

                    <div className="footer__quick-link">
                        <h3 className="quick__links-title">
                            Solution
                        </h3>

                        <ul className="quick__links">
                            {
                                quickLinks01.map((item, index) => (
                                    <li className="quicklink__item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer__quick-link">
                        <h3 className="quick__links-title">
                            Support
                        </h3>

                        <ul className="quick__links">
                            {
                                quickLinks02.map((item, index) => (
                                    <li className="quicklink__item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer__quick-link">
                        <h3 className="quick__links-title">
                            Company
                        </h3>

                        <ul className="quick__links">
                            {
                                quickLinks03.map((item, index) => (
                                    <li className="quicklink__item" key={index}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <p className="copyright">
                    Copyright {data} , developed by Sur'at Shavkatov. All rights reserved. {""}
                </p>
            </div>
        </footer>
    )
}