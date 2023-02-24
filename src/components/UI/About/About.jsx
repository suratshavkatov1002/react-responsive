import './About.css'
import aboutImg from '../../../assets/img/about-us.jpg'


const chooseDate = [
    {
        icon: 'ri-wifi-line',
        title: 'First working procces',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos inventore doloribus et distinctio odit minima provident, it.'
    },

    {
        icon: 'ri-team-line',
        title: 'Dedicated team',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos inventore doloribus et distinctio odit minima provident, it.'
    },

    {
        icon: 'ri-customer-service-line',
        title: '24/7 Hours support',
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos inventore doloribus et distinctio odit minima provident, ita'
    },
]


export default function About() {
    return (
        <section id='about' >
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">
                        <h6 className='subtitle'>Why choose us</h6>

                        <h2>Specialest in aviding clients on </h2>

                        <h2 className="highlight">financial challenges</h2>

                        <p className="description  about__content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magni molestias illum quis suscipit nobis tenetur rerum consequatur, provident reiciendis accusamus impedit culpa quas accusantium. Officiis, saepe. Assumenda, omnis. Tempore.</p>

                        <div className="choose__item-wrapper">
                            {
                                chooseDate.map((item, index) => (
                                    <div className="choose__us-item" key={index}>
                                        <span className='choose__us-icon'>
                                            <i class={item.icon}></i>
                                        </span>

                                        <div>
                                            <h4 className="choose__us-ttle">{item.title}</h4>

                                            <p className="description">{item.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="about__img">
                            <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}