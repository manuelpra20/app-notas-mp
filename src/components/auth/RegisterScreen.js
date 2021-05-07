import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import{setError, revomeError} from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';



export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );


    const [ formValues, handleInputChange ] = useForm({

        name: 'Hernando',
        email: 'nando@gmail.com',
        password: '123456',
        password2: '123456',
    })

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ){
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        }
    }

    const isFormValid = () => {

      if ( name.trim().length === 0 ){

          dispatch( setError( 'Name is required') )
          return false;
      }  else if ( !validator.isEmail( email ) ){

           dispatch(setError('email is not valid') )
           return false;
      } else if ( password !== password2 || password2.length < 5 ) {

          dispatch( setError('Password should be at least 6 characters and match each other') )
          return false 
      }


      dispatch( revomeError() );
      return true;
    }
    

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form className="animate__animated animate__fadeIn animate_faster" onSubmit={ handleRegister } >

               {
                   msgError && 
                (
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                )
               }

                <input 
                  type="text" 
                  placeholder="Name" 
                  name="name" 
                  className="auth__input"   
                  value={ name }   
                  onChange={ handleInputChange }  
                  autoComplete="off" 
                />

                <input 
                  type="text" 
                  placeholder="Email" 
                  name="email" 
                  className="auth__input"  
                  value={ email }  
                  onChange={ handleInputChange }  
                  autoComplete="off" 
                />

                <input   
                  type="password" 
                  placeholder="Password" 
                  name="password"  
                  className="auth__input" 
                  value={ password } 
                  onChange={ handleInputChange }  
                  autoComplete="off" 
                />
                
                <input  
                  type="password2" 
                  placeholder="Confirm Password" 
                  name="confirm"  
                  className="auth__input" 
                  value={ password2 } 
                  onChange={ handleInputChange } 
                  autoComplete="off" 
                />

                <button 
                  className="btn-primary btn btn-block mb-5" 
                  type="submit" 
                >Registar
                </button>

                <Link 
                  className="link" 
                  to="/auth/login"
                > Already registered? 
                </Link>
            </form>
        </>
    )
}



