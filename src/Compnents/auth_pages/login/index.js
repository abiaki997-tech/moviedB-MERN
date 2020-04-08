import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {loginAction, clearError} from '../../../redux/action_creaters/auth_actions';
import '../register/register.css'
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';

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

function Login(props){

const dispatch = useDispatch();
const isAuth =useSelector(state =>state.auth_reducer.isAuth);
const error = useSelector(state=>state.auth_reducer.error);
// const data= useSelector(state=>state.auth_reducer.payload)

console.log(error);

  const [user,setUser] = useState({
    email:'',
    password:''
  });

  const {email,password} = user;

  useEffect(()=>{

    if(isAuth){
      props.history.push("/home")
    }
    else{
      clearError()
    }
    
  },[isAuth,props.history]);

const handleChange =(e)=>{

const name = e.target.name;
const value = e.target.value;


  setUser({
    ...user,
    [name]:value
  })
};

const handleSubmit =(e)=>{
  e.preventDefault()
  let dataSubmit ={
    email,
    password
  }
  dispatch(loginAction(dataSubmit));
  
};

  return(
    <div>
      <Form 
        style={{marginTop:"100px"}}
        onSubmit={handleSubmit}
        {...formItemLayout}>

      <Form.Item required label="Email">
        <Input name="email"
               type="email"
               placeholder="Enter your Email" 
               value={email} 
               onChange={handleChange} 
               required/>
      </Form.Item>

      <Form.Item required label="Password">   
        <Input name="password"
               type="password"
               placeholder="Enter Your Password" 
               value={password} 
               onChange={handleChange} 
               required />
      </Form.Item>

      <Form.Item   {...tailFormItemLayout} >   
        <Button 
          onClick={handleSubmit}
          type="submit">Submit
        </Button>
      </Form.Item>

    {error !== null && <p style={{
        color:"red",
        textAlign:"center",
        background:"white",
        padding:"10px",
        // marginLeft:"35%"
        }}>{error} 
        <span 
          onClick={()=>dispatch(clearError())} 
          style={{
            color:"green",
            marginLeft:"2px",
            cursor:"pointer",
            padding:"10px",
            background:"white"}}>close
      </span></p>}

    
      </Form>
    
<span className="register_btn">Don't have Account? Please <a  href='/register' >Register</a>
</span> 

</div>
  )
}

export default Login;