import { react, useState } from 'react';
import { list } from '../models/list'

function home() {
    const [contador, setContador] = useState(0);

    function adicionarcontador(value) {
        setContador(contador + value)
    }

    function removerContador(value) {
        setContador(contador - value)
    };

    function removerTudo(value, total) {
        setContador(contador - (value * total))
    }

    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th></th>
                </tr>
                {list.map(e => {
                    const keys = Object.keys(e);
                    return <tr>
                        {keys.map(f => {
                            return <td>{e[f]}</td>
                        })}
                        <td>
                            <button onClick={() => {
                                e.quantidade += 1;
                                adicionarcontador(e.valor);
                            }}>Adicionar</button>
                        </td>
                        {
                            e.quantidade > 0 ?
                                <td>
                                    <button onClick={() => {
                                        e.quantidade -= 1;
                                        removerContador(e.valor);
                                    }}>
                                        Remover
                                    </button>
                                </td>
                                : null
                        }
                        {
                            e.quantidade >= 10 ?
                                <td>
                                    <button onClick={() => {
                                        removerTudo(e.valor, e.quantidade);
                                        e.quantidade = 0;
                                    }}>
                                        Remover tudo
                                    </button>
                                </td>
                                : null
                        }
                    </tr>
                })}
            </table>
            Total: {contador}
        </div>
    )
}

export default home;