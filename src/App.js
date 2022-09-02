import './App.css';
import React from 'react';
import Header from './components/header/Header'
import Home from './components/main/Home'
import Curriculo from './components/main/Curriculo'
import Contato from './components/main/Contato'
import SobreSite from './components/main/SobreSite'
import {useSelector} from 'react-redux'

function App() {

  const componentSettings = useSelector(state => state.componentConfig)

  console.log(componentSettings);

  return (
    <React.Fragment>
      <Header />
      {componentSettings.home && <Home />}
      {componentSettings.curriculo && <Curriculo />}
      {componentSettings.contato && <Contato />}
      {componentSettings.sobreSite && <SobreSite />}
    </React.Fragment>
  );
}

export default App;
