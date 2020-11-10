import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import AlbumPage from '../../albums/containers/albumsPage';
import requiredAuth from '../../auth/requiredAuth';
import ImagesPage from '../../images/containers/imagesPage';

const AdminPanelPage = () => {
    const { path, url } = useRouteMatch();

    console.log(url);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to='/login' >Log out</Link>
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