import './Hero.css'
import herodarkImg from '../../../assets/img/hero-img.png'
import lightImg from '../../../assets/img/light-hero-bg.jpg'

export default function Hero({theme}) {
    return (
        <section className="hero__section">
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <div>
                            <h2>We'ra creating Perfect</h2>
                            <h2>Digital Products To</h2>
                            <h2 className='highlight'>Promite Your Brand</h2>
                        </div>

                        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam possimus, error esse aspernatur laborum, harum,
                        </p>

                        <div className="hero__btns">
                            <button className="primary__btn">Get Started Now</button>
                            <button className='secondary__btn'>Discover More</button>
                        </div>
                    </div>

                    <div className="hero__img">
                        <img src= {theme === 'light-theme' ? lightImg : herodarkImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}