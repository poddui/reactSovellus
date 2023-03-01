import React from 'react';

export default function TodoTable({todos, deleteEvent}) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Tehtävä</th>
            <th>Päivämäärä</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => deleteEvent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}