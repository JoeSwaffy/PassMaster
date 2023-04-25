import Header from '../../components/Header'
import { Container } from 'react-bootstrap'
const Home = () => {
    return(
        <>
            <Header />
            <Container className="content">
                <h1 style={{textAlign:"center"}}>Why Passmaster?</h1>
                <br />
                <ul>
                    <li><h2>We help you keep track of your passwords!</h2></li>
                    <li><h2>We're small, so highly unlikely we will get hacked.</h2></li>
                    <li><h2>Our infrastructure is simple, and effective.</h2></li>
                    <li><h2>You're passwords are stored in an encrypted format, so we can't see em!</h2></li>
                    <li><h2>Did I mention it's free? Signup now and store all your precious passwords in one safe place!</h2></li>
                </ul>
            </Container>
            <hr />
        </>
    )
}
export default Home