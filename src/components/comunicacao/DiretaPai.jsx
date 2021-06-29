import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPai = props => {
    return (
        <div>
           <DiretaFilho nome="Filho1 " idade={20} nerd={true}/> 
           <DiretaFilho nome="Filho2 " idade={18} nerd={false}/> 
        </div>
    )
}



export default DiretaPai

