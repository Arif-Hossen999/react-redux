import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllTodos} from './services/actions/todosAction'
import style from './todos.module.css'

const Todos = () => {
    // useSelector dara initial state er data get krbo
    const {isLoading, todos, error} = useSelector((state) => state)
    // useDispatch dara api call krar function (getAllTodos()) call krbo
    const dispatch = useDispatch()

    // useEffect
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
  return (
    <div>
      <h2>Todos App</h2>
      {/* display loading ane error message */}
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error}</h3>}
      {/* display todos data */}
      <section className={style.section}>
        {todos && todos.map((todo) => {
          return <article key={todo.id} className={style.article}>
            <h4>{todo.id}</h4>
            <h4>{todo.title}</h4>
          </article>
        })}
      </section>
    </div>
  )
}

export default Todos
