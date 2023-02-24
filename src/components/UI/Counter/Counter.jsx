import './Counter.css'

const counter = [
    {
        number: '5k',
        text: 'Clients'
    },

    {
        number: '300',
        text: 'Running Projects'
    },

    {
        number: '900',
        text: 'Projects Completed'
    },
]


export default function Counter() {
    return (
        <section className='counter' id='project'>
            <div className="container">
                <div className="counter_wrapper">
                    {
                        counter.map((item, index) => (
                            <div key={index} className="counter__iem">
                                <h3 className="counter__number">
                                   {item.number}+
                                </h3>

                                <h4 className="counter__title">{item.text}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}