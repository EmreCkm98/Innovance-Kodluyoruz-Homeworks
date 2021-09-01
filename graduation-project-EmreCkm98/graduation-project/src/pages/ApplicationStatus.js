/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { NotFound } from '../navigation/NotFound';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { getAppForms, database } from '../services/firestore';

function ApplicationStatus() {
  let { id } = useParams();
  const [form, setForm] = useState({});
  const getForm = async () => {
    const al = database.collection('application-forms');
    const queryRef = await al.where('appCode', '==', `${id}`).get();
    console.log(queryRef);
    if (queryRef.empty) {
      console.log('No matching documents.');
      return;
    }
    queryRef.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      setForm(doc.data());
    });
  };
  useEffect(() => {
    getForm();
  }, []);
  console.log(form);
  return (
    <div>
      {id !== 'undefined' ? (
        <div>
          <Card className="text-center" style={{ marginTop: '25px' }}>
            <Card.Header>
              <Card.Title>Başvuru durumu</Card.Title>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>Adınız:{form.firstName}</ListGroup.Item>
                <ListGroup.Item>Soy Adınız:{form.lastName}</ListGroup.Item>
                <ListGroup.Item>Yaşınız:{form.age}</ListGroup.Item>
                <ListGroup.Item>Adresiniz:{form.address}</ListGroup.Item>
                <ListGroup.Item>
                  TC numaranız:{form.identityNumber}
                </ListGroup.Item>
                <ListGroup.Item>
                  Başvuru nedeni:{form.reasonOfApp}
                </ListGroup.Item>
              </ListGroup>

              <Card.Text>başvuru numaranız: {id}</Card.Text>
              <Card.Text>başvuru durumu: {form.status}</Card.Text>
              {form.status !== 'Bekliyor' ? (
                <Card.Text>başvurunuz cevaplandı : {form.answer}</Card.Text>
              ) : (
                <Card.Text>başvurunuz henüz cevaplanmadı</Card.Text>
              )}
            </Card.Body>
          </Card>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default ApplicationStatus;
