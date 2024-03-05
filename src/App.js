import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactList from './Components/Contacts/ContactList/ContactList';
import EditContact from './Components/Contacts/EditContact/EditContact';
import AddContact from './Components/Contacts/AddContact/AddContact';
import ViewContact from './Components/Contacts/ViewContact/ViewContact';
import NavBar from './Components/NavComponent/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar/>
     <React.Fragment>
        <Routes>
            <Route path='/' element={<Navigate to={'contacts/list'}/>}/>
            <Route path='/contacts/list' element={<ContactList/>}/>
            <Route path='/contacts/edit/:contactID' element={<EditContact/>}/>
            <Route path='/contacts/add' element={<AddContact/>}/>
            <Route path='/contacts/view/:contactID' element={<ViewContact/>}/> 
        </Routes>
     </React.Fragment>
    </div>
  );
}

export default App;
