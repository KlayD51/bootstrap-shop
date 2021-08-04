

const ColumbianCourse = () => {
    return (
        <div className='courseSection'>
            <h1 className='courseTitle'>Columbian Course</h1>
            <img src='columbianFood.jpg' alt='columbian food'/>
            <h2>Course Includes:</h2>
            <div className='courseList'>
            <p>
                <ul>
                    <li>Step by step Arepas Recipe</li>
                    <li>Step by step Empanada Recipe</li>
                    <li>Step by step Sancocho Recipe</li>
                    <li>Step by step Fritanga Recipe</li>
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

export default ColumbianCourse

