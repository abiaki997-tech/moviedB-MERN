import React from "react";
import {ErrorMessage} from 'formik';
import {useSelector,useDispatch} from 'react-redux';
import Debug from './error_handle'
import {clearError} from '../../../redux/action_creaters/auth_actions'
import 'antd/dist/antd.css';
import './register.css';

import {
  Form,
  Input,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 16,
    },
    sm: {
      span: 16,
      offset:11,
    },
  },
};

//form-UI component

function ContactForm(props) {
 
  const isAuth = useSelector(state=>state.auth_reducer.isAuth);
  const error = useSelector(state=>state.auth_reducer.error);
  const dispatch = useDispatch();
        const {
          values,
          touched,
          errors,
          status,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;

 return (
          <div className="app">
            <h2 style={{textAlign:"center",margin:"20px 20px 20px 20px"}}>Sign up</h2>
            <Form style={{ minWidth: '375px' }} 
                  {...formItemLayout} 
                  onSubmit={handleSubmit} >

              <Form.Item required label="first Name" >
                <Input
                  id="firstName"
                  placeholder="Enter your name"
                  type="text"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item required label="Last Name">
                <Input
                  id="lastName"
                  placeholder="Enter your Last Name"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
                  }
                />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}
              </Form.Item>

              <Form.Item required label="Email"
               validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item required label="Password"  
              validateStatus={errors.password && touched.password ? "error" : 'success'}>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirm" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="Enter your confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>

                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                Submit
                </Button>

              </Form.Item>
  {status && <p className="form_area"> {status}
    <span 
      onClick={()=>handleReset()} 
      className="form_close">close
    </span>
  </p> }
                          
    </Form>
    
 <span className="login_btn" >Already have Account? Please <a href="/login">Login</a>
 </span> 
          </div>
        );
      }


export default ContactForm;