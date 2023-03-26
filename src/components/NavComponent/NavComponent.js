import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './NavComponent.module.css';

const NavComponent = () => (
  <div className={styles.NavComponent}>
     <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          Rick and Morty
        </Navbar.Brand>
        <Nav>
          <Link className="nav-link" to='/'>Home</Link>
          <Link className="nav-link" to='/characters'>Personajes</Link>
          <Link className="nav-link" to='/locations'>Locations</Link>
          <Link className="nav-link" to='/episodes'>Episodios</Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

NavComponent.propTypes = {};

NavComponent.defaultProps = {};

export default NavComponent;
