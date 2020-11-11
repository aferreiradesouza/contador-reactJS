import { react, useState } from 'react';

function home() {
    const [contador, setContador] = useState(1);
    
    function adicionarcontador() {
        setContador(contador + 1)
    }
    return (
    <div>
        <div>{contador}</div>
        <button onClick={adicionarcontador}>Adicionar</button>
    </div>
    )
}

export default home;