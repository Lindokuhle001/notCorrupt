import React, { LegacyRef } from 'react'

type addTodoProps = {
    inputElement:LegacyRef<HTMLInputElement>,
    handleSubmit:(e: React.FormEvent<HTMLFormElement>)=> void
}
function AddTodo({inputElement,handleSubmit}:addTodoProps) {
  return (
    <section className="addTodoSection">
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoInput">Add todo</label>
      <input ref={inputElement} id="todoInput" type="text" />
      <button id="addTodo" type="submit">
        add
      </button>
    </form>
  </section>
  )
}

export default AddTodo