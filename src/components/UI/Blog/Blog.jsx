import './Blog.css'
import vidioImg from '../../../assets/img/video.png'
import articleImg from '../../../assets/img/article.png'
import caseImg from '../../../assets/img/case-study.png'

const blogData = [
    {
        imdUrl: vidioImg,
        title: "Vidio",
        desc: 'To know about work. Watch some vidio f.....',
        linkUrl: '#'
    },

    {
        imdUrl: articleImg,
        title: "Articles",
        desc: 'Do you want to improve  the way your brand intiracts with customer ? Lets talk.....',
        linkUrl: '#'
    },

    {
        imdUrl: caseImg,
        title: "Case Study",
        desc: 'Bost your conversation rate',
        linkUrl: '#'
    },
]

export default function Blog() {
    return (
        <section id='blog'>
            <div className="container">
                <div className="blog__top-content">
                    <h6 className="subtitle">Our Blog</h6>

                    <h2>Let's have you from  our<span className="highlight"> recent blog</span></h2>
                </div>

                <div className="blog__wrapper">
                    {
                        blogData.map((item, index) => (
                            <div className="blog__item " key={index}>
                                <h3>{item.title}</h3>

                                <div className="blog__img">
                                    <img src={item.imdUrl} alt="" />
                                </div>

                                <p className="description  blog__desgn">{item.desc}</p>

                                <div>
                                    <a href={item.linkUrl} className="learn__more">
                                        <i class="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}