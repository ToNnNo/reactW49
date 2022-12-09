import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { save } from "../slice/userSlice";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const {register, handleSubmit, formState: { errors }, setError, clearErrors} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onSubmit(data) {
    
    try { 
      const result = await axios.post("http://localhost:3200/signin", data);
      dispatch(save({ data: result.data }));
      navigate('/admin');
    } catch(e) {
      setError('authentication', { type: 'custom', message: e.response.data.message })
    }
  }

  const inputgroup = {marginBottom: '10px'};

  return (
    <>
      <h2>Authentification</h2>

      { errors.authentication && (
        <p>
          { errors.authentication.message } &nbsp;
          <button onClick={ () => { clearErrors(['authentication']) }} >&times;</button>
        </p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={inputgroup}>
          <label>Email: </label>
          <input {...register('email', { required: 'Ce champs est obligatoire' })} />
          { errors.email && <p>{ errors.email.message }</p> }
        </div>
        <div style={inputgroup}>
          <label>Password: </label>
          <input type="password" {...register('password', { required: 'Ce champs est obligatoire' })} />
          { errors.password && <p>{ errors.password.message }</p> }
        </div>
        <button>Se connecter</button>
      </form>
      
    </>
  );
}