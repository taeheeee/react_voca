import React from 'react';
import { useEffect } from 'react';
import { MdFullscreenExit } from 'react-icons/md';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import Button from './Button';
import {useDispatch} from 'react-redux';
import { createdictionary,loadDictFB} from './redux/modules/dictionary';
const Dictionary = () =>{
    // 리덕스가 가지고있는 전체데이터 가지고 오기
    // 전체데이터(state)=>return값이 state
    const dispatch = useDispatch()
    const my_lists = useSelector((state) => state.dictionary.list);
    
    return(
        <div>
            <Title>단어리스트</Title>
            {my_lists.map((list,index)=>{

                return(
                    <>
                    
                    <ListStyle key={index}>
                        <Content>
                            <Context>단어</Context>
                            <Contentof>{list.word}</Contentof>
                        </Content>
                        <Content>
                            <Context>설명</Context>
                            <Contentof>{list.desc}</Contentof>
                            
                        </Content>
                        <Content>
                            <Context>예시</Context>
                            <Contentof style={{color:"blueviolet"}}>{list.example}</Contentof>
                        </Content>
                    
                    </ListStyle>
                    
                    </>
                    );
                    
                }
            )} 
            <Button />
        </div>
    );
}

const ListStyle = styled.div`
    background-color:white;
    height:150px;
    margin-bottom:15px;
    padding:16px;
    
 `   
const Content = styled.div`
    display:flex;
    width:100%;
    height:33%;
    flex-direction:column;
`;
const Context = styled.div`
    text-decoration:underline;
    margin-bottom:5px;
`
const Contentof = styled.div`
    
`;
const Title = styled.p`
  text-align: start;
  font-size:25px;
  margin-left:8px;
  margin-bottom:15px;


`;

export default Dictionary;