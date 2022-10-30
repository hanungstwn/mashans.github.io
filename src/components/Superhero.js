import { Card, Container, Col, Row } from "react-bootstrap"
import badboysImage from "../assets/images/action/bbfl.jpg"
import blackwidowImage from "../assets/images/action/blackwidow.jpeg"
import fastforiousImage from "../assets/images/action/ffs.jpg"
import gundalaImage from "../assets/images/action/gundala.jpg"
import mile22Image from "../assets/images/action/mile22.jpg"
import sriasihImage from "../assets/images/action/sriasih.jpg"


const Superhero = () => {
    return(
        <div>
        <Container>
            <br />
            <h1 className="text-white">Action Movies</h1>
            <br />
            <Row>
                <Col md={4} className="movieWrapper" id="superhero">
                    <Card className="bg-dark text-white movieImage">
                    <Card.Img src={badboysImage} alt="Bad Boys Movies" className="images"/>
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Bad Boys For Life</Card.Title>
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
                    <Card.Img src={fastforiousImage} alt="Fast Forious Movies" className="images"/>
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Fast and Furious 7</Card.Title>
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
                    <Card.Img src={gundalaImage} alt="Gundala Movies" className="images"/>
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Gundala</Card.Title>
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
                    <Card.Img src={mile22Image} alt="Mile22 Movies" className="images"/>
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Mile 22</Card.Title>
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
                    <Card.Img src={sriasihImage} alt="Sri Asih Movies" className="images"/>
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Sri Asih</Card.Title>
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
                    <Card.Img src={blackwidowImage} alt="Black Widow Movies" className="images"/>
                    <div className="p-2 m-1 text-white">
                        <Card.Title className="text-center">Black Widow</Card.Title>
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

export default Superhero