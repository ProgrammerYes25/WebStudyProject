import styles from './nav.module.css';
import React, { useState } from 'react';

function Nav(props){
  const [isOpen, setIsOpen] =useState(false);
  const goingList =[];
  let manuch = ""

  console.log(props);
  if(props.going){
    for(let i = 0; i < props.going.length; i++){
      let t = props.going[i];
      goingList.push(
      <a id={t.id} href={'/read/'+t.id} ><li class={styles.manu2} onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(Number(t.id));
      }}>{t.title}</li></a>);
    }
  }

  return (<nav>
    <ul>
        <a href="/" ><li class={styles["manu1"]}>소개</li></a>
        <a href="/" onClick={(event)=>{
            event.preventDefault();
            setIsOpen(!isOpen);
          }}><li class={styles.manu1}>시리즈</li></a>
          {isOpen && (
                <ul class={styles.manu2}>
                  {goingList}
                </ul>  
          )}
        <a href="/"><li class={styles.manu1}>난이도별</li></a>
    </ul>  
</nav>)
}
export default Nav;