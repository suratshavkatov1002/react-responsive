import './Team.css'

import team01 from '../../../assets/img/team-01.png'
import team02 from '../../../assets/img/team-02.png'
import team03 from '../../../assets/img/team-03.png'
import team04 from '../../../assets/img/team-04.png'


const teamMembers = [
    {
        img: team01,
        name: 'Courtny Hurry',
        position: 'Product Developer'
    },

    {
        img: team02,
        name: 'Lindas  Walton',
        position: 'Front-End Developer'
    },

    {
        img: team03,
        name: 'Harry Martin',
        position: 'Product Designer'
    },

    {
        img: team04,
        name: 'Jhon Cooper',
        position: 'CEO Sr. Developer'
    },
]

export default function Team() {
    return (
        <section id='team'>
            <div className="container">
                <div className="team__content">
                    <h6 className='subtitle'>Our Team</h6>
                    <h2>Meat with <span className='highlight'>our team</span></h2>
                </div>

                <div className="team__wrapper">
                    {
                        teamMembers.map((item, index) => (
                            <div className="team__wrapper-item" key={index}>
                                <div className="team__img">
                                    <img src={item.img} alt="" />
                                </div>

                                <div className="team__details">
                                    <h4>{item.name}</h4>

                                    <p className="detailes">{item.position}</p>

                                    <div className="team__member-social">
                                        <span><i class="ri-linkedin-line"></i></span>

                                        <span><i class="ri-twitter-line"></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}