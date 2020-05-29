import React, {useEffect, useState} from 'react';
import firebase from './FirebaseConnection';

export const AuthContext = React.createContext();//Criando o contexto, armazena as informações editadas abaixo

export const AuthProvider = ({children}) => {//CRIANDO O PROVEDOR DO CONTEXTO: OS FILHOS SERÃO PASSADOS VIA PROPS
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{//Verifica se há usuário autenticado, para atualizar conforme a alteração do sistema AUTOMATICAMENTE
        //OU SEJA, SE VOCÊ DESLOGAR EM QUALQUER PARTE DO COMPONENTE ELE ATUALIZARA AUTOMATICAMENTE E VOLTARÁ PARA A TELA DE LOGIN
        firebase.auth().onAuthStateChanged(setCurrentUser);
    },[])

    return (
        <AuthContext.Provider//O provider de fato
            value={{currentUser}} //Isso é a informação que será fornecida pelo provider, para ser consumida pelo filhos
        >{/* Provider é quem fornece o contexto*/}
            {children}{/* AUTORIZANDO OS FILHOS A TEREM ACESSO AO CONTEXTO (INFO PASSADA EM VALUE). OU SEJA, QUEM FOR FILHO DESSE COMPONENTE-AUTHPROVIDER-TERÁ ACESSO A TODO CONTEXTO */}
        </AuthContext.Provider>
    );
}