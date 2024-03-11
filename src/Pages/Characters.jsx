import {Container,Row,Col,Card} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Characters() {
    const [characters, setCharacters] = useState(null);
    console.log(characters)
    const getCharacter = async() => {
        const response = await axios.get("https://rickandmortyapi.com/api/character");
        let arrCharacters = response.data.results
        setCharacters(arrCharacters)
        
    }
    
    useEffect(() => {
        getCharacter();
    }, [])

    return (
        <Container id="characters-page">
            <Row>
          
            {characters && characters.map(character=>(
            <Col key={character.id} className='p-2'>
                <Card key={character.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={character.image}/>
                    <Card.Body>
                        <Card.Title>
                        {character.name}
                        </Card.Title>
                        <hr/>
                        <Card.Text>
                            Species: {character.species}
                            <br/>
                            Status: {character.status}
                            <br/>
                            Origin: {character.origin.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>))}
            </Row>

        </Container>
    )
}
