import React, { useState, useEffect } from 'react';

import { Button, Card, Table, Container, Row, Col } from 'react-bootstrap';
import { getAppForms } from '../services/firestore';

import { useHistory, useLocation } from 'react-router-dom';

function AdminAppList() {
  const [appForm, setAppForm] = useState([]);
  let { state } = useLocation();
  const history = useHistory();

  useEffect(() => {
    getAppForms().then((doc) => {
      setAppForm(doc);
    });
  }, [appForm]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Başvuru Listesi</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Ad</th>
                      <th className="border-0">Soyad</th>
                      <th className="border-0">Yaş</th>
                      <th className="border-0">TC</th>
                      <th className="border-0">Adres</th>
                      <th className="border-0">Başvuru Nedeni</th>
                      <th className="border-0">Başvuru Durumu</th>
                      <th className="border-0">Başvuru Tarihi</th>
                      <th className="border-0">Başvuru Kodu</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appForm.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                        <td>{user.identityNumber}</td>
                        <td>{user.address}</td>
                        <td>{user.reasonOfApp}</td>
                        <td>{user.status}</td>
                        <td>{user.appCode}</td>
                        <td>
                          <Button
                            variant="success"
                            onClick={() => {
                              console.log(user);
                              const successId = user.appCode;
                              history.push({
                                pathname: `/admin/basvuru/${user.appCode}`,
                                state: { successId, data: user },
                              });
                            }}
                          >
                            Görüntüle
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminAppList;
