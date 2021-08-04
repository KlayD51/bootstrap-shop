import Card from "react-bootstrap/Card";

const Promo = () => {
    return (
        <div className='courseSection'>
            <h1 className='courseTitle'>Italian Course</h1>
            <img src='promoBundle.jpg' alt='Promo Pic'/>
            <h2>Promotional Bundle:</h2>
            <div className='courseList'>
            <p>
            <ul>
                    <li>BUNDLE ANY 2 COURSES</li>
                    <li>INCLUDES SURPRISE EXTRA DISH</li>
                    <li>EAXTRA SESSION FOR DIRECT QUESTIONS WITH INSTRUCTOR</li>
                </ul>
            </p>
            </div>
            <br></br>
            <button className='buyButton'>SUBSCRIBE</button>
            <h3>$45.99/month</h3>
            
        </div>
    )
}

export default Promo
