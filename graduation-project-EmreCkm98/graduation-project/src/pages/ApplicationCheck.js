import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import { getAppForm } from '../services/firestore';
import CheckInput from '../components/CheckInput';
import { CodeSchema } from '../validations/AppFormValidate';
import { yupResolver } from '@hookform/resolvers/yup';

function ApplicationCheck() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(CodeSchema) });
  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data.code);
    const userCode = getAppForm(data.code);
    console.log(userCode);
    userCode.then((code) => {
      console.log(code);
      const successId = code;
      history.replace({
        pathname: `/basvuru/${code}`,
        state: { successId, data: code },
      });
    });
  };
  return (
    <div
      style={{
        width: '400px',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        marginTop: '100px',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="mb-8">
          <CheckInput
            placeholder="Başvuru numarası giriniz"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            register={register}
            name="code"
            error={errors}
          />

          <Button
            variant="outline-secondary"
            id="button-addon2"
            type="submit"
            style={{ height: '38px' }}
          >
            Sorgula
          </Button>
        </InputGroup>
      </form>
    </div>
  );
}

export default ApplicationCheck;
