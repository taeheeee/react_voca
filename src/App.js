import { useEffect } from 'react';
import React from 'react';
import './App.css';
import './style.css'
import styled from "styled-components";
import Dictionary from './Dictionary';
import Button from './Button';
import {Route, Routes} from 'react-router-dom';
import  Add from './Add';
import {db} from './firebase';
import {collection,doc,getDoc,getDocs,addDocs, addDoc,updateDoc} from 'firebase/firestore';
import {loadDictFB} from './redux/modules/dictionary';
import {useDispatch} from 'react-redux';

function App() {
    const dispatch = useDispatch();
    React.useEffect(()=>{
      dispatch(loadDictFB());
    // addDoc(collection(db,'dict'),{text:'new'})
    // collection(db,'dict');
    
  },[]);

  return (
      <Container>
        <Routes>
          <Route  path="/" element={<Dictionary />} />
          <Route  path="/add" element={<Add />} />
        </Routes>
      </Container>
  );
}

const Container = styled.div`
  width:350px;
  min-height:90vh;
  background-color:rgb(226, 255, 248);
  margin:auto;
  padding:16px;
  border: 1px solid #ddd;

`;


export default App;
