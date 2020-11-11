import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import AlbumPage from '../../albums/containers/albumsPage';
import requiredAuth from '../../auth/requiredAuth';
import ImagesPage from '../../images/containers/imagesPage';
import { useDispatch } from 'react-redux';

const AdminPanelPage = () => {
    const { path, url } = useRouteMatch();
    const dispatch = useDispatch();
    
    console.log(url);
    
    const onClick = () => {
        dispatch({
            type:"LOGOUT",
        })
        localStorage.removeItem('user');
        window.location.reload()
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link>
                            <a href='/login' onClick={onClick}>Log out</a>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Switch>
                <Route exact path={`${path}album`}>
                    <AlbumPage/>
                </Route>
                <Route exact path={`${path}image/:id`}>
                    <ImagesPage/>
                </Route>
            </Switch>
  
        </div>
    )
}

export default requiredAuth(AdminPanelPage);