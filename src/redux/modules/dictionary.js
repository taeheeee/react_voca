// dictionary.js
import {db} from '../../firebase';
import {collection,doc,getDoc,getDocs,addDocs, addDoc,updateDoc} from 'firebase/firestore';

// Actions
// LOAD는 데이터를 어디서 가지고 오는거
// CREATE 추가하기 기능 필요
const LOAD   = 'dictionary/LOAD';
const CREATE = 'dictionary/CREATE';
const UPDATE = 'dictionary/UPDATE';

const initialState = {
    list:[
        {word:"단어를 적어주세요",desc:"설명을 적어주세여",example:"예시다"},
        {word:"단어를 적어주세요",desc:"설명을 적어주세여",example:"예시다"},
        {word:"단어를 적어주세요",desc:"설명을 적어주세여",example:"예시다"}
    ]
}



// Action Creators

export function loaddictionary(dictionary) {
  return { type: LOAD,dictionary };
}

export function createdictionary(dictionary) {
  return { type: CREATE, dictionary };
}
export function updatedictionary(dictionary_index){
    return {type:UPDATE, dictionary_index};
}



// 미들웨어
export const loadDictFB = () =>{
    return async function (dispatch){
        const dict_data = await getDocs(collection(db,'dict'));
        const dict_list = []
        dict_data.forEach((d) => {
            dict_list.push({id: d.id, ...d.data()})
        })
        dispatch(loaddictionary(dict_list))
    }
}
/*
    javascript array에는 map과 forEach함수를 쓸수 있다
    https://yhmane.tistory.com/170
*/
    
export const addDictFB  = (dictionary)=>{
    return async function (dispatch){
        const docRef = await addDoc(collection(db, "dict"), dictionary)
        const dictionary_data = {id: docRef.id, ...dictionary}
        dispatch(createdictionary(dictionary_data))
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'dictionary/LOAD':{
            return {...state, list: action.dictionary};
        }
        case 'dictionary/CREATE':{
            const new_dict_list = [...state.list,action.dictionary];
            console.log(new_dict_list);
            return {list:new_dict_list};
        }

    // do reducer stuff
    default: return state;
    }
}