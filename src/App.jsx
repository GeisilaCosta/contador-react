import { useState } from 'react';
import styles  from './button.module.css';

export default function MeuContador() {

    const [contador, setContador] = useState(0) //useState é um Hook

    function aumentar() {
        setContador(contador + 1)//setContador serve para atualizar o valor do contador
    }

    return (
        <div className='container'>
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            <button className= {styles.myButton} onClick={aumentar}>Aumentar</button>
        </div>
    )
}
