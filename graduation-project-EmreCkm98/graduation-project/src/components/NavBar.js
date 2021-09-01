import React, { useContext } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { Navbar, Container, Nav, Dropdown, Button } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { APP_CREATE, APP_STATUS } from '../navigation/CONSTANTS';

function Header() {
  const { logout, isLogged } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand href={APP_CREATE} className="mr-2">
            Başvuru Formu
          </Navbar.Brand>
          <Navbar.Brand href={APP_STATUS} className="mr-2">
            Başvuru Sorgula
          </Navbar.Brand>
        </div>

        <Nav
          variant="tabs"
          defaultActiveKey="/admin/basvuru-listesi"
          className="ml-auto justify-content-end"
          navbar
        >
          {isLogged && (
            <Nav.Item>
              <Nav.Link className="m-0" href="/admin/basvuru-listesi">
                <span className="no-icon">Başvuru Listesi</span>
              </Nav.Link>
            </Nav.Item>
          )}
          {isLogged ? (
            <Nav.Item>
              <Nav.Link className="m-0" href="/admin" onClick={handleLogout}>
                <span className="no-icon">Çıkış</span>
              </Nav.Link>
            </Nav.Item>
          ) : (
            <Nav.Item>
              <Nav.Link className="m-0" href="/admin">
                <span className="no-icon">Yönetici Girişi</span>
              </Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
