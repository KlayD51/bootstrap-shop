
const JamaicanSection = () => {
    return (
        <div className='courseSection'>
            <h1 className='courseTitle'>Jamaican Course</h1>
            <img src='jamaicanFood.jpg' alt='jamaican food'/>
            <h2>Course Includes:</h2>
            <div className='courseList'>
            <p>
                <ul>
                    <li>Step by step Curried Chicken Recipe</li>
                    <li>Step by step Jerk Chicken Recipe</li>
                    <li>Step by step Oxtails Reacipe</li>
                    <li>Step by step Roti Recipe</li>
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

export default JamaicanSection
