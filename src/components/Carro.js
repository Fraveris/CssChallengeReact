import styles from "./Carro.module.css"
import React from 'react'

const Carro = ({ marca, km, cor}) => {
  return (
    <div>
        <ul>
            <li className={styles['Marca']}>Marca: {marca}</li>
            <li className={styles['Km']}>KM: {km}</li>
            <li className={styles['Cor']}>Cor: {cor}</li>
        </ul>
    </div>
  )
}

export default Carro