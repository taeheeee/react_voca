import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {addDictFB} from './redux/modules/dictionary';
import {useNavigate} from "react-router-dom"


const Add = () => {
    const wordref = React.useRef(null);
    const descref = React.useRef(null);
    const examref = React.useRef(null);

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addDict = ()=>{ 
        const new_dict_list = {
            word: wordref.current.value,
            desc: descref.current.value,
            example:examref.current.value,
        };
        dispatch(addDictFB(new_dict_list));
        navigate("/")
    }
    
    return(
   
    <div>
    <Title>단어추가하기</Title>     
       <AddDict>
            <ul>단어</ul>
            <Input ref={wordref}/>
       </AddDict>
       <AddDict>
            <ul>설명</ul>
            <Input ref={descref} />
       </AddDict>
       <AddDict>
            <ul>예시</ul>
            <Input ref={examref}/>
       </AddDict>
       <button onClick={addDict}>추가하기</button>
    </div>);
}

const AddDict = styled.div`
    background-color:white;
    margin-bottom:15px;
    height:90px;
`;

const Input = styled.input`
    height:40%;
    width:90%;
    border: solid 2px black;
`;
const Title = styled.p`
  text-align: start;
  font-size:25px;
  margin-left:8px;
  margin-bottom:15px;
`;


export default Add;

