import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onLogin } from '../services/login.service';

export const useLogin = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const navigate = useNavigate();

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSubmit = async e => {
    try {
      e.preventDefault();
      const data = await onLogin(formState.usuario, formState.password)
      console.log(data);
      //navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onSubmit,
  };
};
