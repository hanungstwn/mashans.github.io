import { Container, Row, Col, Button } from 'react-bootstrap';

const intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white d-flex justify-content-center align-items-center text-center'>
                <Row>
                    <Col>
                        <div className='title'>NONTON CARTOON</div>
                        <div className='title'>SAMBIL MAKAN POPCORN</div>
                        <div className='introButton mt-4 text-center'>
                            <Button variant='light'>More Film List</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default intro