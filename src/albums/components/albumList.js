import React, { useEffect, useState } from 'react';
import { Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useSelector } from 'react-redux';

const AlbumList = () => {
    const [album, setAlbum] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = useSelector(state => state.login.user[0].id)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums?userId=' + userId)
            .then(function (response) {
                setAlbum(response.data);
                setLoading(false)
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
        <div className='center'>
            <Row style={{margin: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>
                {
                    loading &&
                    <div className="vertical-center">
                        <div className="sk-chase">
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        <div className="sk-chase-dot"></div>
                        </div>
                    </div>
                }
                { !loading &&
                    AlbumRenderList()
                }
            </Row>
        </div>
    )
}

export default AlbumList;