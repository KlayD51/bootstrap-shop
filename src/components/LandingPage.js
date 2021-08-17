import { Container, Row, Col } from "react-bootstrap"

const LandingPage = () => {
    return (
        <div className='LpContainer'>
            <Container>
                <Row>
                    <Col>
            <div className='PgImgHeader'>
            <img src='indianFood.jpg' alt='indian cuisine'/>
            <h1 className='PgImgHeader-text'>Here at International Kitchen We offer 
            <br></br> Courses that take you from zero to Hero!!!</h1>
            </div>
            </Col>
            </Row>
            </Container>
            
        </div>
    )
}

export default LandingPage
