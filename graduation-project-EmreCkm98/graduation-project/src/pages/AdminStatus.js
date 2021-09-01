import React, { useEffect, useState } from 'react';
import {
  Button,
  Card,
  ListGroup,
  InputGroup,
  DropdownButton,
  Dropdown,
  FormLabel,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {
  useHistory,
  Link,
  useParams,
  useLocation,
  Redirect,
} from 'react-router-dom';
import { getForm } from '../services/firestore';
import { AdminAnswerSchema } from '../validations/AppFormValidate';
import { yupResolver } from '@hookform/resolvers/yup';
import CheckTextArea from '../components/CheckTextArea';
import { ADMIN_APP_LIST } from '../navigation/CONSTANTS';

function AdminStatus() {
  let { id } = useParams();
  let { state } = useLocation();
  const [form, setForm] = useState({});
  const [value, setValue] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(AdminAnswerSchema) });
  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);
    form.status = value;
    form.answer = data.answer;

    getForm(id, form.status, data.answer);
    history.push({
      pathname: `${ADMIN_APP_LIST}`,
      state: {
        data: form.status,
        id: id,
      },
    });
  };
  const handleSelect = (e) => {
    setValue(e);
  };

  useEffect(() => {
    setForm(state.data);
    // getForm();
  }, []);

  return (
    <div>
      <Card
        bg="light"
        border="primary"
        className="text-center"
        style={{ marginTop: '25px' }}
      >
        <Card.Header>
          <Card.Title>Başvuru durumu</Card.Title>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>Adınız:{form.firstName}</ListGroup.Item>
            <ListGroup.Item>Soy Adınız:{form.lastName}</ListGroup.Item>
            <ListGroup.Item>Yaşınız:{form.age}</ListGroup.Item>
            <ListGroup.Item>Adresiniz:{form.address}</ListGroup.Item>
            <ListGroup.Item>TC numaranız:{form.identityNumber}</ListGroup.Item>
            <ListGroup.Item>Başvuru nedeni:{form.reasonOfApp}</ListGroup.Item>
          </ListGroup>

          <Card.Text>başvuru numaranız: {id}</Card.Text>
          <Card.Text>başvuru durumu: {form.status}</Card.Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mb-8">
              <CheckTextArea
                placeholder="kullanıcıya cevap yaz"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                as="textarea"
                name="answer"
                register={register}
                error={errors}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                type="submit"
              >
                Kaydet
              </Button>
            </InputGroup>
          </form>
        </Card.Body>
      </Card>
      <FormLabel>başvuru durumu güncelleyin:</FormLabel>
      <DropdownButton
        onSelect={handleSelect}
        id="dropdown-basic-button"
        title="Başvuru"
      >
        <Dropdown.Item eventKey="Çözüldü">Çözüldü</Dropdown.Item>
        <Dropdown.Item eventKey="Çözülemedi">Çözülemedi</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default AdminStatus;
