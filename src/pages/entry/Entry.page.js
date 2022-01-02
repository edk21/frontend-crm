import React,{useState} from 'react'
import LoginForm from '../../components/login/Login.comp'
import PasswordReset from '../../components/password.reset/PasswordReset.comp';
import "./entry.style.css"

const Entry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formLoad, setFormLoad] = useState('login');

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        switch(name){
            case "email": 
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleOnResetSubmit = (e) => {
      e.preventDefault();
      if (!email) {
        return alert('Please Enter The Email !!!');
      }

      console.log(email);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password){
            return alert("Fill Up All The Form !!!")
        } 

        console.log(email, password)
    }

    const formSwitcher = (formType) => {
        setFormLoad(formType)
    }

    return (
      <div className='entry-page bg-info'>
        <div className='wrapper bg-light jumbotron'>
          {formLoad === 'login' ? (
            <LoginForm
              handleOnChange={handleOnChange}
              handleSubmit={handleSubmit}
              formSwitcher={formSwitcher}
              email={email}
              password={password}
            />
          ) : (
            <PasswordReset
              handleOnChange={handleOnChange}
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
              email={email}
            />
          )}
        </div>
      </div>
    );
}

export default Entry
