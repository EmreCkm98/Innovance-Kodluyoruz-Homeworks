import React from 'react';

// react-bootstrap components
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { addAppForm } from '../services/firestore';
import { codeGenerate } from '../utils/CodeGenerator';
import { APP_SUCCESS } from '../navigation/CONSTANTS';
import { schema } from '../validations/AppFormValidate';
import { yupResolver } from '@hookform/resolvers/yup';
import FormInput from '../components/FormInput';
import FormTextArea from '../components/FormTextArea';

function UserForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);
    let code = codeGenerate();
    data.code = code;
    data.status = 'Bekliyor';
    data.answer =
      'Başvurunuz henüz cevaplanmadı. Lütfen daha sonra tekrar deneyiniz';
    addAppForm(data)
      .then((docs) => {
        const successId = docs.id;
        history.replace({ pathname: APP_SUCCESS, state: { successId, data } });
      })
      .catch((error) => {
        alert(error);
      });
  };
  console.log(errors);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="8" style={{ marginTop: '50px', marginLeft: '100px' }}>
            <Card style={{ marginTop: '50px', marginLeft: '200px' }}>
              <Card.Header>
                <Card.Title as="h4">Başvuru Formu</Card.Title>
              </Card.Header>
              <Card.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <FormInput
                      className="pr-1"
                      md="5"
                      label="Ad"
                      name="firstName"
                      placeholder="Ad giriniz"
                      type="text"
                      register={register}
                      error={errors}
                    />
                    <FormInput
                      className="px-1"
                      md="7"
                      label="Soyad"
                      name="lastName"
                      placeholder="Soyad giriniz"
                      type="text"
                      register={register}
                      error={errors}
                    />
                  </Row>
                  <Row>
                    <FormInput
                      className="pr-1"
                      md="6"
                      label="Yaş"
                      name="age"
                      placeholder="yaş giriniz"
                      type="text"
                      register={register}
                      error={errors}
                    />
                    <FormInput
                      className="pl-1"
                      md="6"
                      label="TC"
                      name="identityNumber"
                      placeholder="TC bilgisi giriniz"
                      type="text"
                      register={register}
                      error={errors}
                    />
                  </Row>
                  <Row>
                    <FormTextArea
                      md="6"
                      label="Adres"
                      name="address"
                      placeholder="Adres giriniz"
                      cols="80"
                      rows="4"
                      as="textarea"
                      register={register}
                      error={errors}
                    />
                    <FormTextArea
                      className="pr-1"
                      md="6"
                      label="Başvuru nedeni"
                      name="reasonOfApp"
                      placeholder="Başvuru sebebiniz"
                      cols="80"
                      rows="4"
                      as="textarea"
                      register={register}
                      error={errors}
                    />
                  </Row>
                  <Row>
                    <FormInput
                      className="px-1"
                      md="12"
                      label="Dosya"
                      name="photosDocs"
                      placeholder="Dosya seçebilirsiniz"
                      type="file"
                      register={register}
                      error={errors}
                    />
                  </Row>

                  <Button
                    className="btn-fill pull-right"
                    style={{
                      width: '120px',
                      height: '50px',
                      marginTop: '30px',
                    }}
                    type="submit"
                  >
                    Gönder
                  </Button>
                  <div className="clearfix"></div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserForm;
