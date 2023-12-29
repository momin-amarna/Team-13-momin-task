import './AboutCard.css';

const AboutCard = () => {
    return (
        <div className=' about-card card '>
            <div className="card-body">
                <h5 className="card-title m-2">About</h5>
                <p className="card-text m-2">Social media has become a powerful tool for communication,
                    information sharing, and networking in today's digital age.</p>
                <div>
                    <ul className='list-unstyled m-2 mt-4'>
                        <li className='about-card-li' >
                            <i class="bi bi-calendar-date "></i>
                            <span className='span-position m-2'>people : <strong>20 Members </strong></span>
                        </li>
                        <li className='about-card-li' >
                            <i class="bi bi-heart"></i>
                            <span className='span-position m-2'>Status:  <strong>Public </strong></span>
                        </li>
                        <li className='about-card-li' >
                            <i class="bi bi-globe2"></i>
                            <span className='span-position m-2'><strong>www.webestica.com  </strong></span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default AboutCard;