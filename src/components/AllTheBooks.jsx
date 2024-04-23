import { Component } from "react"
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";


import Card from 'react-bootstrap/Card';
import { Container, Row, Col  } from "react-bootstrap";

class AllTheBooks extends Component {
    

    render() {
        return (
            <Container>
               <Row>
                {fantasy.map((book) => (
                   <Col key={book.id} xs={12} sm={6} md={4} lg={3} xl={2}> 
                   <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    price: {book.price}$
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">{book.author}</small>
                    </Card.Footer>
                    
                   </Card>
                   </Col> 
                ))}
                </Row> 
            </Container>
        )
    }
}

export default AllTheBooks;