import './App.css';






function App() {
  return (
    <div>
      <h1 className="sr-only">To do</h1>
      <div className="to-do">
        <form className="to-do__form-high form" action="">
          <label className="form__title" for="inputHigh">high</label>
          <div className="form__inner" id="highPriority">
            <input className="form__input" id="inputHigh" type="text" placeholder="Добавить важных дел"></input>
            <button className="form__add-btn" id="btnHigh" type="button"></button>
          </div>
        </form>
        <ul className="to-do__list" id="highPriorityList">
        </ul>
        <form className="to-do__form-low form" action="">
          <label className="form__title" for="inputLow">low</label>
          <div className="form__inner" id="lowPriority">
            <input className="form__input" id="inputLow" type="text" placeholder="Добавить не очень важных дел"></input>
            <button className="form__add-btn" id="btnLow" type="button"></button>
          </div>
        </form>
        <ul className="to-do__list" id="lowPriorityList">
        </ul>
      </div>
    </div>

  )
}

export default App;
