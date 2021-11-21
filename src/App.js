import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [ project, setProject ] = useState("");
  const [ tasks, setTasks ] = useState([]);
  const [ iterator, setIterator ] = useState(0);
  const [ step, setStep ] = useState(1);
  const [ value, setValue ] = useState("");

  const handleValue = e => {setValue(e.target.value)}
  
  const handleSubmit = (e, stepNumber, i) => {
    switch(stepNumber) {
      case 1:
        setProject(value);
        setStep(2);
        break;
      case 2:
        setTasks([...tasks, {name: value}]);
        break;
      case 3:
        const updatedTasks = [...tasks]; 
        switch (value) {
          case "t":
            updatedTasks[iterator].description = "to be tested";
            break;
          case "c":
            updatedTasks[iterator].description = "code review";
            break;
          case "d":
            updatedTasks[iterator].description = "done";
            break;
            default :
            updatedTasks[iterator].description = value;
        }
        setTasks(updatedTasks);
        if (iterator < tasks.length-1) {
          setIterator(iterator + 1);
        } else {
          setIterator(0);
        }
        break;
    }
    e.preventDefault();
    setValue("");
  }
  
  const handleClear = () => {
    setValue("");
    setProject("");
    setTasks([]);
    setStep(1);
    setIterator(0);
  }

  useEffect(() => {
    if (step === 1) {
      document.getElementById("focus-1").focus();
    } else if (step === 2) {
      document.getElementById("focus-2").focus();
    } else {
      document.getElementById("focus-3").focus();
    }
    console.log(document.getElementById("autoFocus"))
  }, [step]);

  const handleCopy = () => {
    var copyText = document.getElementById("result").textContent;
  
    navigator.clipboard.writeText(copyText);
  }

  return (
    <div className="container">
      <div className="center">
        <div className={step === 3 ? "edit" : "hide"}>Editting: {project + "-" + tasks[iterator]?.name}</div>
        <div className="row">
          <div className="col">
            <form onSubmit={(e) => handleSubmit(e, 1)} className={step === 1 ? "" : "hidden"}>
              <input id="focus-1" value={value} onChange={handleValue} placeholder="Project (i.e. wcl)" required></input>
            </form>
            <form onSubmit={(e) => handleSubmit(e, 2)} className={step === 2 ? "" : "hidden"}>
              <input id="focus-2" value={value} onChange={handleValue} placeholder="Task number (i.e. 251)" autofocus></input>
            </form>
            <form onSubmit={(e) => handleSubmit(e, 3)} className={step === 3 ? "" : "hidden"}>
              <input id="focus-3" value={value} onChange={handleValue} placeholder="Status (i.e. done)"></input>
            </form>
            <div className="row btns">
              <button className="btn" onClick={handleClear}>Clear</button>
              {
                step === 3
                  ? 
                    <button className="btn" type="button" onClick={handleCopy}>Copy</button>
                  :
                    step === 2
                      ?
                        <button className="btn" type="button" onClick={() => setStep(3)}>Next</button>
                      :
                        null
              }
            </div>
            <div className="col legend">
              <p>c = code review</p>
              <p>d = done</p>
              <p>t = to be tested</p>
            </div>
          </div>
          <div className="col">
            <div id="result" className="row">
              {tasks.map(task => 
                project + '-' + task.name + ' -> ' + (task.description ? task.description : "") + `\n`
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
