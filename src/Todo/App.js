import Todo from "./Todo";
import './Styles.css'
import task from '../task.png'
import './App.css'
function App(props) {
    return (
        <div className="App">
            <div className="App-header">
                <img src={task} alt={task} height="100px" className="App-logo" />
                <h3 style={{ color: "white" }}>Your Favourite To_Do App </h3>
            </div>

            <h1>Your ToDo's Here</h1>
            <Todo />
        </div>
    )
}

export default App;
