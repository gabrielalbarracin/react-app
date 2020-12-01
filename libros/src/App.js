import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books:[
        {id:0, rating:4, title: "Harry Potter y el caliz de fuego", image: 'libro01.jpg'},
        {id:1, rating:2, title: "The shining", image: 'libro02.jpg'},
        {id:2, rating:3, title: "Código Da Vinci", image: 'libro03.jpg'},
        {id:3, rating:5, title: "El Principito", image: 'libro04.jpg'},
        {id:4, rating:1, title: "Sobrenatural", image: 'libro05.jpg'},
      ],
      copyBooks: [],
    };
  }


  render(){
    return(
      <div className="app">

        <Menu title="Bookshop    "/>
        <List itams={this.state.books}/>
      </div>
    ); 
  };

}

export default App;
