
import Card from "react-bootstrap/Card";

const CardSection = () => {
    return (
        <div className='cardRow'>
            <Card style={{width:'300px', height:'450px', textAlign:'center', padding:'20px'}}>
            <Card.Img variant='top' src='foodPrep.jpg' alt='food prep'/>
            <Card.Body>
            <Card.Title>Food Prep Essential Guide</Card.Title>
            <Card.Text>Includes a guide to meal prep to make sure 
                all of our subscribers have this quintessential
                skill.
            </Card.Text>
            </Card.Body>
            </Card>
            <div className='cardDivider'></div>

            <Card style={{width:'300px', height:'450px', textAlign:'center', padding:'20px'}}>
            <Card.Img variant='top' src='foodGroups.jpg' alt='food groups'/>
            <Card.Body>
            <Card.Title>Food Grouping Guide</Card.Title>
            <Card.Text>Includes a food grouping guide to create 
                healthy inclusive meals.
            </Card.Text>
            </Card.Body>
            </Card>
            <div className='cardDivider'></div>

            <Card style={{width:'300px', height:'450px', textAlign:'center', padding:'20px'}}>
            <Card.Img variant='top' src='foodSafety.jpg' alt='food Safety'/>
            <Card.Body>
            <Card.Title>Food Safety Guide</Card.Title>
            <Card.Text>Includes a food safety guide that ensures safe
                cooking procedures.
            </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default CardSection
