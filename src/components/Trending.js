import { Card, Container, Col, Row } from "react-bootstrap"
import lightyearImage from "../assets/images/cartoon/lightyear.jpg"
import bigheroImage from "../assets/images/cartoon/bh6.jpg"
import insideoutImage from "../assets/images/cartoon/insideout.jpg"
import loraxImage from "../assets/images/cartoon/lorax.jpg"
import sfImage from "../assets/images/cartoon/sf.jpg"
import ts4Image from "../assets/images/cartoon/ts4.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">Trending Movies</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="bg-dark text-white movieImage">
                        <Card.Img src={lightyearImage} alt="Lightyear Movies" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Lightyear</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Card.Img src={insideoutImage} alt="Insideout Movies" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Inside Out</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Card.Img src={bigheroImage} alt="Big Hero Movies" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Big Hero 6</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Card.Img src={loraxImage} alt="Lorax Movies" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Lorax</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Card.Img src={sfImage} alt="Sf Movies" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Small Foot</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark text-white movieImage">
                        <Card.Img src={ts4Image} alt="Ts4 Movies" className="images"/>
                        <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Toy Story 4</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending