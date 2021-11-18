import React, { useContext } from 'react'
import s from './LoginForm.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../Button/Button';
import { AuthContext, AuthContextType } from '../../context';

type Inputs = {
  email: string
  password: string
}

export const LoginForm = () => {

  const { register, handleSubmit, formState: {errors}} = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data: Inputs, event: any) => {
    event.preventDefault();
    console.log(data)
  };


  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <input className={s.input} type={"email"} {...register("email", { required: true, maxLength: 20 })} placeholder={"email"}/>
      {errors.email && <div className={s.required}>Required</div>}
      <div>&nbsp;</div>
      <input className={s.input} type={"password"} {...register("password", { required: true, minLength: 3 })}  placeholder={"password"}/>
      {errors.password && <div className={s.required}>Required</div>}
      <div>&nbsp;</div>
      <Button block>LOGIN<input className={s.button} type="submit" value={"LOGIN"}/></Button>
      <div className={s.errorMessage}></div>
    </form>
  );
}






