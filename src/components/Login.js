import { Button, Modal } from 'react-bootstrap'

const Login = () => {
   return(
    <>
    <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Implement the form here.</p>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    </>
   ) 
}

export default Home