import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function MyNavbar() {
    return (
        <Navbar id="myNavbar" bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
            <Link to="/">OooWeee Rick</Link> 
            <Link to="/about">About Rick and Morty</Link>
            <Link to="/characters">Characters</Link>
        </Container>
      </Navbar>
    )
}