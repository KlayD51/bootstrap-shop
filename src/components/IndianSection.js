
const IndianSection = () => {
    return (
        <div className='courseSection'>
            <h1 className='courseTitle'>Indian Course</h1>
            <img src='naanPic.jpg' alt='Naan Bread'/>
            <h2>Course Includes:</h2>
            <div className='courseList'>
            <p>
                <ul>
                    <li>Step by step Chicken Tikka Masala Recipe</li>
                    <li>Step by step Chana Masala Recipe</li>
                    <li>Step by step Samosa Recipe</li>
                    <li>Step by step Garlic, Paneer, and Chilli Naan Recipe</li>
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

export default IndianSection
