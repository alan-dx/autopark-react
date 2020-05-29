import React, { useCallback, useContext, useEffect } from 'react';
import firebase from './FirebaseConnection';
import './Login.css';
import { AuthContext } from './Auth';
import { Redirect, withRouter } from 'react-router';

const Login = ({history}) => {
    
    // useEffect(()=>{
    //     firebase.auth().signOut()
    // },[])

    const handleLogin = useCallback(
        async event => {//O evento de login é assincrono, pois ele é realizado apois o carregamento do componente
            event.preventDefault();//Evita o reload da página (evento padrão do form)
            const {email, password} = event.target.elements;
            try {//Testar a real necessidade
                await firebase.auth().signInWithEmailAndPassword(email.value,password.value);//Irá alterar o auth state e fazer com que o currentuser seja setado, tudo automaticamente
                history.push('/geral');//Adiciona /geral no historico
            } catch (error) {
                alert(error)
            }
        },
        [history]
    );

    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/geral' />
    }

    return (
        <div>
            <header>
                <div className='box_title'>AUTOPARK - LOGIN</div>
            </header>
            <body className='container'>
                <div className='box_login'>
                    <form onSubmit={handleLogin}>
                        <label>EMAIL</label>
                        <input type='email' name='email' placeholder='Email' ></input>
                        <label>SENHA</label>
                        <input type='password' name='password' placeholder='Senha'></input>
                        <button type='submit'>LOGIN</button>
                    </form>
                </div>
            </body>
        </div>
    );
}

export default withRouter(Login);