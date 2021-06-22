import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            list: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.filterItem = this.filterItem.bind(this);
    }
    handleChange(event) {
        this.setState({
            task: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        // * To Display Task As List *
        const list = [...this.state.list];
        const tasks = {
            id: Date.now(),
            task: this.state.task,
            completed: false
        }
        list.push(tasks);
        this.setState({
            list,
            task: ''
        })
        console.log(tasks);
    }
    handleRemove(el) {
        const task = [...this.state.list];
        let findTask = task.find(e => e.id === el.id);
        let updateTask = task.map(e => e.id === el.id ? { ...findTask, completed: true } : e);
        updateTask = task.filter(e => e.id !== el.id);
        this.setState({
            list: updateTask
        })
        console.log(updateTask);
    }
    filterItem(value) {
        console.log(value);
        switch (value) {
            case "true":
                let taskEnd = true;
                const task = [...this.state.list];
                let updateTask = task.filter(e => e.completed === taskEnd);
                this.setState({
                    task: updateTask
                })
                break;
            case "false":
                let taskStatus = false;
                let updateTasks = task.filter(e => e.completed === taskStatus);
                this.setState({
                    task: updateTasks
                })
                break;
            default:
                break;
        }
    }
    render(props) {
        return (
            <div>
                <div className="ToDoForm">
                    {/* To Get User Input  */}
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <label htmlFor="task"> Task : </label>
                        <input type="text" value={this.state.task} name="task" placeholder="Enter a Task to Do" onChange={e => this.handleChange(e)} required />
                        <button value="submit" className="Submit"> Submit </button>
                    </form>
                    {
                        this.state.list.map((el) => (
                            <div className="TaskList" key={el.id}>
                                {el.task}
                                <button className="Clear" onClick={() => this.handleRemove(el)}> X </button>
                            </div>
                        ))
                    }
                    {/* Switch Over Various Actions Input */}
                    <div>

                        <input type="checkbox" value="all" name="task" className="Checkbox" onChange={(event) => this.filterItem(event.target.value)} />
                        <label htmlFor="All Tasks " >All Tasks</label>

                        <input type="checkbox" value="true" name="task" className="Checkbox" onChange={(event) => this.filterItem(event.target.value)} />
                        <label htmlFor="Completed " >Completed</label>

                        <input type="checkbox" value="false" name="task" className="Checkbox" onChange={(event) => this.filterItem(event.target.value)} />
                        <label htmlFor="Running Task " >Running Task</label>

                    </div>
                </div>
            </div>
        )
    }
}


export default Todo;
