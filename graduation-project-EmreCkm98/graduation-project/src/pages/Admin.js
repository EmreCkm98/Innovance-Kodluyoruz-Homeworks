import React, { useContext } from 'react';
import './Admin.scss';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FluidInput from '../components/FluidInput';
import Button from '../components/Button';
import { AuthContext } from '../context/AuthContext';
import { ADMIN_APP_LIST, ROOT } from '../navigation/CONSTANTS';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../validations/AppFormValidate';

function Admin() {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = (data) => {
    console.log(data);

    if (login(data)) {
      history.replace({ pathname: `${ADMIN_APP_LIST}` });
    } else {
      history.replace({ pathname: `${ROOT}` });
    }
  };
  console.log(errors);
  return (
    <div className="login-container">
      <div className="title">Login</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FluidInput
          type="text"
          name="userName"
          placeholder="kodluyoruz"
          style={{ margin: '15px 0', marginBottom: '30px' }}
          register={register}
          error={errors}
        />

        <FluidInput
          type="password"
          name="password"
          placeholder="bootcamp109"
          style={{ margin: '15px 0', marginBottom: '30px' }}
          register={register}
          error={errors}
        />
        <Button buttonText="log in" type="submit" buttonClass="login-button" />
      </form>
    </div>
  );
}

export default Admin;
