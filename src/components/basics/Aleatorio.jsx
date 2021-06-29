import React from 'react'

const Aleatorio = (props) => {
    const {min, max} = props

    
         const valor = parseInt(Math.random() * (max - min) )+ min

    return (
        <div>
           <h2>Valor aleatório: </h2>
           <p>{valor}</p>
           
        </div>
    )
}

export default Aleatorio
