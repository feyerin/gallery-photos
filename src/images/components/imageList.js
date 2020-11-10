import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

const ImageList = () => {
    const [image, setImage] = useState([]);
    const userId = useSelector(state => state.login.user[0].id);
    // let slug = useParams();
    // console.log('slug', slug)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?albumId='+ userId)
            .then(function (response) {
                setImage(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const ImageRenderList = () => {
        return image.map((td) => ( 
                <Card style={{ width: '18rem', margin:4 }}>
                    <Card.Img variant="top" src={td.url} />
                    <Card.Body>
                        <Card.Title>{td.title}</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
        )) 
    }

    return (
        <Row>
           {ImageRenderList()}
        </Row>
    )
}

export default ImageList;