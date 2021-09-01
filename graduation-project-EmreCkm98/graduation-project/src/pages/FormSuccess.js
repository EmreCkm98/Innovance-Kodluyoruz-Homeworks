import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
import { APP_STATUS } from '../navigation/CONSTANTS';

function FormSuccess() {
  const location = useLocation();
  //console.log(location.state.data);
  return (
    <div>
      <Card className="text-center" style={{ marginTop: '25px' }}>
        <Card.Header>
          <Card.Title>Başvurunuz için teşekkürler</Card.Title>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item data-testid="name">
              Adınız: {location.state.data.firstName}{' '}
            </ListGroup.Item>
            <ListGroup.Item data-testid="lastName">
              Soy Adınız: {location.state.data.lastName}{' '}
            </ListGroup.Item>
            <ListGroup.Item data-testid="age">
              Yaşınız: {location.state.data.age}{' '}
            </ListGroup.Item>
            <ListGroup.Item data-testid="adress">
              Adresiniz: {location.state.data.address}{' '}
            </ListGroup.Item>
            <ListGroup.Item data-testid="tc">
              TC numaranız: {location.state.data.identityNumber}{' '}
            </ListGroup.Item>
            <ListGroup.Item data-testid="resonOfApply">
              Başvuru nedeni: {location.state.data.reasonOfApp}{' '}
            </ListGroup.Item>
          </ListGroup>
          <Card.Text>
            altta başvuru kodunuz mevcuttur.başvurunuzu sorgulayabilirsiniz
          </Card.Text>
          <Card.Text>{location.state.data.code}</Card.Text>
          <Link to={APP_STATUS}>
            <Button variant="primary">Başvuru Sorgula</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">Başvuru özeti</Card.Footer>
      </Card>
    </div>
  );
}

export default FormSuccess;
