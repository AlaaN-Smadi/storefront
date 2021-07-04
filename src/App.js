import React from 'react';
import Main from './component/main';
import Header from './component/header';



class App extends React.Component {
  render() {
    return (
      <div style={{backgroundColor:"#e9e9f5"}} >
        <Header />

        <Main />
      </div>
    )
  }
}

export default App
