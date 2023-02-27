import React from 'react';

export default function Todolist(props){

    const deleteEvent = (index) => {
        const newTodos = props.todos.filter((todo, i) => i !== index);
        props.setTodos(newTodos);
      }

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tehtävä</th>
                        <th>Päivämäärä</th>
                    </tr>
                 </thead>
                <tbody>
                    {
                        props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.desc}</td>
                            <td>{todo.date}</td>
                            <td><button onClick={() => deleteEvent(index)}>Delete</button></td>
                        </tr>
                        )
                    }     
                </tbody>
            </table>
        </div>
    )
}