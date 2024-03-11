import {Container,Row,Col, Card} from 'react-bootstrap';
import '../App.css'
import HomepageImage from '../Components/HomepageImage';


export default function HomePage() {
    return (
        <Container fluid id="homepage" className='vh-100 m-0 pl-16 d-flex align-items-center'>
            <Row> 
                <Col xs={8} className='justify-center '>
                    <Card className="bg-dark text-white text-center">
                        <Card.Body>
                            <Card.Title>&quot;Ricky ticky tavy, b^*t@%!&quot; -Birdperson</Card.Title>
                            <Card.Text className='text-bold'>
                            Get ready to embark on an interdimensional rollercoaster ride of hilarity and existential chaos! Dive into the zany universe of Rick and Morty, where madcap adventures, mind-bending science, and dysfunctional family dynamics collide in the most absurdly entertaining way possible. Buckle up, because this isn&apos;t your average animated series -- it&apos;s a mind-blowing journey through space, time, and the twisted genius of co-creators Dan Harmon and Justin Roiland. Join the fan frenzy and discover why Rick and Morty isn&apos;t just a show, it&apos;s a pop culture phenomenon!
                            </Card.Text>
                            <Card.Subtitle>&quot;Nobody exists on purpose, nobody belongs anywhere, everybody&apos;s gonna die. Come watch TV?&quot;</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <HomepageImage />
                </Col>
            </Row>
        </Container>
    )
}