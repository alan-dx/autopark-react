import React from 'react';

import Routes from './routes';
import {AuthProvider} from './Auth';

const App = () => {

  return (
    <AuthProvider /*O PROVIDER DO CONTEXTO */>
      <Routes /* TODOS ESSES ELEMENTOS IRÃO CONSUMIR AS INFORMAÇÕES FORNECIDAS PELO PROVIDER */ />
    </AuthProvider>
  );
};

export default App;
