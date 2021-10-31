import React from "react";
import xpng from "../img/x.png";

function Section({todos, settodos, showTodos}) {

  function ClickCheckBox(index) {
    settodos(todos.map((item)=>{
      if(item.id === index){
        return {
          ...item, completed: !item.completed
        }
      }
      return item
    }))
  }

  const DeleteTodo = (index) => {
    settodos(todos.filter((el) => el.id !== index))
  }


  return (
      <>
        {showTodos.map((atodo) => (
          <li key={atodo.id} className="todo-app__item">
            <div className="todo-app__checkbox">
              <input id={atodo.id} type="checkbox" onClick={() => ClickCheckBox(atodo.id)} />
              
              <label className = {`${atodo.completed? "completed" : ""}`} htmlFor={atodo.id} />
            </div>
            {atodo.completed === true ? (
              <h1 className="todo-app__item-detail_check">
                {atodo.text}
              </h1>
            ) : (
              <h1 className="todo-app__item-detail">{atodo.text}</h1>
            )}
            <img 
              src={xpng} 
              className="todo-app__item-x" 
              onClick = {() => DeleteTodo(atodo.id)}
              alt = ""
            />
          </li>
        ))}
      </>
  );
}

export default Section;
