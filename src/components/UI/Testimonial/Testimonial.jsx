import './Testimonial.css'
import ava01 from '../../../assets/img/ava-1.jpg'
import ava02 from '../../../assets/img/ava-2.jpg'
import ava03 from '../../../assets/img/ava-3.jpg'


import Slider from 'react-slick'

export default function Testimonial() {

    const settings = {
        dots: false,
        infinete: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000, 
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide:   true
    }

    return (
        <section id='testimonial'>
            <div className="container">
                <div className="slider__content--top">
                    <h6 className="subtitle">
                        Testimonials
                    </h6>

                    <h2>Trusted by more than {" "} <span className="highlight">5.000  customers</span></h2>
                </div>


                <div className="slider__wrapper">
                    <Slider {...settings}>
                        <div className="slider__item">
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis, ducimus impedit dolore alias, natus in obcaecati voluptas, eligendi veritatis provident quasi debitis sequi reiciendis culpa voluptate ex? Cum ea officia nam ipsa neque nemo sed enim tempora molestias velit?
                            </p>

                            <div className="customer__detailes">
                                <div className="customer__img">
                                    <img src={ava01} alt="" />
                                </div>

                                <div>
                                    <h5 className="customer__NAME">
                                        Jhon Doe
                                    </h5>

                                    <p className="description">CEO, Workreation</p>
                                </div>
                            </div>
                        </div>

                        <div className="slider__item">
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis, ducimus impedit dolore alias, natus in obcaecati voluptas, eligendi veritatis provident quasi debitis sequi reiciendis culpa voluptate ex? Cum ea officia nam ipsa neque nemo sed enim tempora molestias velit?
                            </p>

                            <div className="customer__detailes">
                                <div className="customer__img">
                                    <img src={ava02} alt="" />
                                </div>

                                <div>
                                    <h5 className="customer__NAME">
                                      Anna Martin 
                                    </h5>

                                    <p className="description">Softeare Developer</p>
                                </div>
                            </div>
                        </div>


                        <div className="slider__item">
                            <p className="description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis, ducimus impedit dolore alias, natus in obcaecati voluptas, eligendi veritatis provident quasi debitis sequi reiciendis culpa voluptate ex? Cum ea officia nam ipsa neque nemo sed enim tempora molestias velit?
                            </p>

                            <div className="customer__detailes">
                                <div className="customer__img">
                                    <img src={ava03} alt="" />
                                </div>

                                <div>
                                    <h5 className="customer__NAME">
                                        Surat
                                    </h5>

                                    <p className="description">Sr. Product Designer</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}