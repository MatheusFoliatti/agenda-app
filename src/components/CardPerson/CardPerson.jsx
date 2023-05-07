import React from "react";

import { Stack } from "../Stack/Stack" 

import style from "./CardPerson.module.css"

//Fourth Method

// stacks => ["JavaScript", "React", "ReactNative", "HTML", "CSS", "HUAWEI"]
//                stack               

export function CardPerson( { cover, avatar, name, office, stacks } ) {
  return ( 
    <>
      <div className={style.card}>
        <img src={cover} alt="Cover"/>
        <img className={style.avatar} src={avatar} alt="Avatar" />
        <p className={style.p1}>{name}</p>
        <p className={style.p2}>{office}</p>
        <div className={style.stack}>
          {stacks.map((stack) => {
            return <Stack key={stack} name={stack.Tec} cor={stack.color} />
          })
          }
        </div>
      </div>
    </>
  );
}