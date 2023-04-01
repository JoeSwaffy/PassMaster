import { Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand>PassMaster</Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/register">Sign up</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header