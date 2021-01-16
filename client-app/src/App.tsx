import React, { Component } from 'react'
import { Header, Icon, List } from 'semantic-ui-react';
import './App.css';
import axios from 'axios';



class App extends Component {
  state = {
    values: []
  }

  componentDidMount(){
    this.setState({
      values:[{id:1, name:"Value 101"}, {id:1, name:"Value 102"}]
    })
  }
render() {
    return (
      <div>        
       <Header as='h2'>
    <Icon name='users' />
    <Header.Content>Reactivities</Header.Content>
  </Header>
  <List>
  {this.state.values.map((value:any)=>(
              <List.Item>{value.name}</List.Item>
             ))}
    
  </List>
        
       
      </div>
    );
  }
}
  // componentDidMount() {
  //   axios.get('http://localhost:5000/api/values')
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         values: response.data
  //       })
  //     })

  // }
  // render() {
  //   return (
  //     <div className='App'>
  //       <header className='App-header'>
  //         <img src={logo} className='App-logo' alt='logo' />
  //         <ul>
  //           {this.state.values.map((value: any) => (
  //             <li key={value.id}>
  //               {value.name}
  //             </li>

  //           ))}

  //         </ul>
  //       </header>
  //     </div>
  //   );
  // }


export default App;
