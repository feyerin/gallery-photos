import React, { useState, useEffect } from 'react';
import { Row, Card, Button, Modal, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";

const ImageList = () => {
    const [image, setImage] = useState([]);
    const [show, setShow] = useState(false);
    const [newData, setNewData]  = useState({title: '', url: ''});

    let slug = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?albumId='+ slug.id)
            .then(function (response) {
                setImage(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const ImageRenderList = () => {
        return image.map((td) => ( 
            <Card style={{ width: '13rem', margin:2 }}>
                <Card.Img variant="top" src={td.url} />
                <Card.Body>
                    <Card.Title>{td.title}</Card.Title>
                </Card.Body>
            </Card>
        )) 
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleChange = e => {
        const { name, value } = e.target;
        setNewData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const postImage = () =>{
        axios.post('https://jsonplaceholder.typicode.com/photos', newData)
            .then(function (response) {
                setImage(prevState => [...prevState, newData]);
                setShow(false);            
            })
            .catch(function (error) {
                console.log(error);
            })
        
    }
    return (
        <div>
            <Row style={{margin:6}}>
                {ImageRenderList()}
            </Row>
            <Button 
                onClick={handleShow}
                variant="primary"
                size='lg' 
                style={{display:'flex', paddingLeft:'auto', paddingRight:'auto', alignItems:'center', margin: 'auto', marginTop:20}}>
                <b>+</b>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                Title
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="text"
                                onChange={handleChange}
                                name="title" 
                            />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm="2">
                                img source
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control 
                                type="text"
                                onChange={handleChange}
                                name="url"                             
                            />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button onClick={postImage} variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ImageList;