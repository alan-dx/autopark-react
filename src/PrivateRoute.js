import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from './Auth';//Importando o contexto

const PrivateRoute = ({component:Component, ...rest/*Descontruindo o componente passado via props, trocando o nome, e herdando o resto */}) => {
    const {currentUser} = useContext(AuthContext)//Usando o contexto
    return (
        <Route/* Afinal, o ProviderRoute é uma rota neh! */
            {...rest/*Herdando as demais props que podem ser passadas*/}
            render={/*Alterando o Metodo render da props, para definir o que será renderizado/feito por ela*/
                props => !!currentUser ? (<Component {...props} />)/*Recebe as props e passa para o componente que é desejado caso o user esteja autenticado e é passado via props la no arquivo routes.js*/
                : (<Redirect to={'/'} />)/*Indicando para onde se deve redirecionar caso o usuário n esteja autenticado */
            }
        >
        </Route>
    );
}

export default PrivateRoute;