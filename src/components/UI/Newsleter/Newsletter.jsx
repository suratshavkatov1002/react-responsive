import './Newsletter.css'

export default function Newsletter() {
    return(
        <section className='nevsletter'>
            <div className="container">
                <div className="newsletter__warapper">
                    <div className="newsletter__content">
                        <h6 className="subtitle">Let's work</h6>
                        <h2>Explore the <span className="higlight">hidden</span> idies and subsicribe !</h2>
                    </div>

                    <div className="newsletter__form">
                        <input type="email"  placeholder='Email' />
                        <button className="secondary__btn">Subscribe Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}