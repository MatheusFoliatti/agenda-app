import React from "react";

import style from "./Filter.module.css"

export function Filter( { filter } ) {
  return ( 
    <>
      <div className={style.card}>
        <p className={style.h1}>{filter}</p>
        </div>
    </>
  );
}