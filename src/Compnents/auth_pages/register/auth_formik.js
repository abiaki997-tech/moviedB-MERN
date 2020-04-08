import React ,{} from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {Link,withRouter} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {requestRegister,recieveRegisterError} from '../../../redux/action_creaters/auth_actions'
import ContactForm from './contact_compnent';



function RegisterFormik(props){

  console.log(props)
  // const url ='http://localhost:5000/requestApi';

const error = useSelector(state=>state.auth_reducer.error);
const isAuth = useSelector(state=>state.auth_reducer.isAuth);
// console.log(isAuth)
const dispatch = useDispatch();

  return (
   <div>
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email:'',
            password:'',
            confirmPassword:''
        }}

        validationSchema={Yup.object().shape({
                  firstName: Yup.string()
                    .required('Name is required'),
                  lastName: Yup.string()
                    .required('Last Name is required'),
                  email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                  password: Yup.string()
                    .min(6, 'Password must be at least 6 characters')
                    .required('Password is required'),
                  confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required')
                })}

 onSubmit={(values,
  {resetForm,setSubmitting,setStatus,setErrors,setFieldError})=> {

    axios.post('/auth/register',{data:values}).then((res)=>{
      console.log(res.status===201)
       if(res.status===201){
      return props.history.push("/login")
       }
    })
    .catch((err)=>{
      // setErrors({jok:errmsg});
      // setFieldError("general",errmsg)
      setStatus(err.response.data.error)
    });
      setSubmitting(false);
    }}

       children ={props =>(<ContactForm {...props}></ContactForm>)} />
</div>
   
  )
}

export default RegisterFormik;



