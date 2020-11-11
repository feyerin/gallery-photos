import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useSelector } from 'react-redux';

const AlbumList = () => {
    const [album, setAlbum] = useState([]);
    const userId = useSelector(state => state.login.user[0].id)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
            .then(function (response) {
                setAlbum(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);
    
    const AlbumRenderList = () => {
        return album.map((td) => ( 
            <Card style={{width:'17rem', height:'10rem', margin:10}}>
                <Card.Body>
                <Card.Title>{td.title}</Card.Title>
                <Card.Text>
                    
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/image/${td.id}`}>
                        <Button className='center' variant="primary">check the album</Button>
                    </Link>                            
                </Card.Footer>
            </Card>
            )) 
    }

    return (
        <Row className='center'>
           {AlbumRenderList()}
        </Row>
    )
}

export default AlbumList;