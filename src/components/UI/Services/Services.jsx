import './Services.css'

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App  Development',
        desc: 'Lorem ipsum dolor sit amet.App  Development'
    },

    {
        icon: 'ri-code-box-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor sit amet.App  Development'
    },

    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc: 'Lorem ipsum dolor sit amet.App  Development'
    },

    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet.App  Development'
    },
]

export default function Services() {
    return (
        <section id='service'>
            <div className="container">
                <div className="services__top-content">
                    <h6 className='subtitle'>Our Services</h6>
                    <h2>Save time managing your bussines with</h2>
                    <h2 className="highlight"> our best services</h2>
                </div>

                <div className="services__item-wrapper">
                    {
                        serviceData.map((item, index) => (
                            <div className="services__item" key={index}>
                                <span className="service__icons"><i class={item.icon}></i></span>

                                <h3 className="service__title">{item.title}</h3>

                                <p className="description">{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}