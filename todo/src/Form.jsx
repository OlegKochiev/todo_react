import { useState } from "react";

function Form(props) {
  return (
    <form className="to-do__form-high form" action="">
      <label className="form__title" htmlFor="inputHigh">high</label>
      <div className="form__inner" id="highPriority">
        <input className="form__input" id="inputHigh" type="text" placeholder="Добавить важных дел"></input>
        <button className="form__add-btn" id="btnHigh" type="button"></button>
      </div>
    </form>
  )
}

export default Form;