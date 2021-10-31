import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Section from "../components/section";
import Footer from "../components/footer";

function TodoApp(){
    const [todos, settodos] = useState([]);
    const [showMode, setshowMode] = useState("all");
    const [showTodos, setshowTodos] = useState([]);

    const addTodo = (inputContent) => {
        settodos([
          ...todos,
          {
            id: Date.now(),
            text: inputContent,
            completed: false
          },
        ]);
      };

    function SetInput(event) {
        addTodo(event.target.value);
        event.target.value = "";
    }

    const filterhandler = () => {
        switch(showMode){
            case "completed":
                setshowTodos(todos.filter(e => e.completed === true))
                break;
            case "active":
                setshowTodos(todos.filter(e => e.completed === false))
                break;
            default:
                setshowTodos(todos)
                break;
        }
    }

    useEffect(() => {
        filterhandler()
    }, [todos, showMode]);
    

    return(
        <>
            <Header></Header>
            <section className="todo-app__main">
            <input className="todo-app__input" placeholder="What needs to be done?" onKeyUp={(event) => { if (event.key === "Enter") { SetInput(event); } } } />

            <ul className="todo-app__list" id="todo-list">
                <Section todos = {todos} settodos = {settodos} showTodos = {showTodos}></Section>
            </ul>
            </section>
            <Footer todos = {todos} setshowMode = {setshowMode} settodos = {settodos}></Footer>
        </>
    )
}


export default TodoApp;