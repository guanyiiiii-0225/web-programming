import React from "react";

function Footer ({todos, setshowMode, settodos}){
    const left = todos.filter((event)=>
        event.completed === false
    )

    const complete = todos.filter((e) =>
        e.completed === true
    )

    const setAll = () =>{
        setshowMode("all");
    }

    const setActive = () =>{
        setshowMode("active");
    }

    const setCompleted = () =>{
        setshowMode("completed");
    }

    const clearCompleted = () =>{
        settodos(todos.filter((e) => e.completed !== true));
    }

    const visibleStyle = {
        visibility: 'hidden'
      };


    return(
        <footer className="todo-app__footer" id="todo-footer">
            <div className = "todo-app__total">{left.length} left</div>
            <ul className = "todo-app__view-buttons">
                <button onClick = {setAll}>All</button>
                <button onClick = {setActive}>Active</button>
                <button onClick = {setCompleted}>Completed</button>
            </ul>
            {complete <= 0 ? 
                (<div className="todo-app__clean" style = {visibleStyle}>
                <button onClick = {clearCompleted}>Clear Completed</button>
                </div>):
                (<div className="todo-app__clean" >
                <button onClick = {clearCompleted}>Clear Completed</button>
                </div>)
            }
        </footer>
    )
}

export default Footer