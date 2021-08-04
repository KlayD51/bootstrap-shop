
const italianSection = () => {
    return (
        <div className='courseSection'>
            <h1 className='courseTitle'>Italian Course</h1>
            <img src='italianFood.jpg' alt='italian food'/>
            <h2>Course Includes:</h2>
            <div className='courseList'>
            <p>
                <ul>
                    <li>Step by step Baked Ziti Recipe</li>
                    <li>Step by step Cheese Ravioli Recipe</li>
                    <li>Step by step Lasagna Recipe</li>
                    <li>Step by step Caccio e' Peppe Recipe</li>
                    <li>Food Prep Essentials Guide</li>
                    <li>Food Grouping Guide</li>
                    <li>Food Safety Guide</li>
                </ul>
            </p>
            </div>
            <br></br>
            <button className='buyButton'>SUBSCRIBE</button>
            <h3>$25.99/month</h3>
            
        </div>
    )
}

export default italianSection
