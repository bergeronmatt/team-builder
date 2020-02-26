import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  
  const [lists, setLists] = useState([
   

  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setLists([...lists, newMember])
  }
  
  
  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember}/>
      <List lists={lists}/>
    </div>
  );
}

export default App;
