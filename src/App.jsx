import { useRef } from 'react';
import styles from './App.css';
import urls from "./data"

function App() {
  const state=urls;
  console.log(state[0]);
  function loadimages(numImage=urls.length){

    let i=0;
    while(i<numImage){
  const section=document.getElementById('layout')
   const div=document.createElement('div')
   const img=document.createElement('img')
   const h5=document.createElement('h5')
   h5.classList.add('h5')
   div.classList.add('div')
   img.src=`https://neoos.s3.eu-west-1.amazonaws.com/img/birds/${state[i]}.JPG`;
   div.appendChild(img)
   div.appendChild(h5)
   const urlt=document.createTextNode(`_${state[i]}`)
   h5.appendChild(urlt)
   document.body.appendChild(div)
   i++
    }
  }
  return (
    <>
    {loadimages()}
{window.addEventListener('scroll',()=>{
  if(window.scrollY + window.innerHeight>=document.documentElement.scrollHeight){
loadimages()
  }
})
 
}
    </>
  );
}

export default App;
