import React from 'react'
import style from  './card.module.css'
export const Card = ({currMovie}) => {

  return (
    <li>
      <div className={style.card}>
      <p className={style.title}>{currMovie.Title}</p>
      <figure className={style.fig}>
        <img src={currMovie.Poster} alt={currMovie.Title} />
      </figure>
      <a href='#' >
      <button className={style.btn}>Watch Now</button>
      </a>
      </div>
    </li>
  )
}
