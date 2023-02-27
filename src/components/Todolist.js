import React from 'react';

export default function Todolist(props){
    return(
        <div>
            <table>
                <th>Tehtävä</th>
                <th>Päivämäärä</th>
                <tbody>
                    {
                        props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>
                        </tr>
                        )
                    }     
                </tbody>
            </table>
        </div>
    )
}