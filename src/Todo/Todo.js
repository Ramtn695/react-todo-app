
import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            list: [],
            taskEnd: [],
            status: "all"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.filterItem = this.filterItem.bind(this);
        this.displayList = this.displayList.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
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
            status: "running"
        }
        list.push(tasks);
        this.setState({
            list,
            task: ''
        })
        console.log(tasks);
    }
    handleRemove(el) {
        let task = [...this.state.list];
        let updateTask = task.map(e => e.id === el.id ? { ...e, status: "completed" } : e);
        let taskEnd = [...this.state.taskEnd];
        taskEnd = [...taskEnd, { ...el, status: "completed" }];
        updateTask = updateTask.filter(e => e.id !== el.id)
        this.setState({
            list: updateTask,
            taskEnd
        })
    }
    changeStatus(el) {
        console.log(el);
        let task = [...this.state.list];
        task.push({ ...el, status: "running" });
        let taskEnd = this.state.taskEnd.filter(e => e.id !== el.id);
        console.log(task);
        this.setState({
            list: task,
            taskEnd
        })
    }
    filterItem(e) {
        if (e.target.checked) {
            this.setState({
                status: e.target.value
            })
            console.log(this.state.status);
        }
    }
    displayList() {
        const status = this.state.status;
        const taskEnd = this.state.taskEnd.map(el => (
            <div className="TaskList" key={el.id}>
                {el.task}
                <button className="Clear" onClick={() => this.changeStatus(el)}> X </button>
            </div>
        ))
        const taskList = this.state.list.map((el) => (
            <div className="TaskList" key={el.id}>
                {el.task}
                <button className="Clear" onClick={() => this.handleRemove(el)}> X </button>
            </div>
        ))
        return (
            <div>
                {
                    status === "completed" ? taskEnd : taskList
                }
            </div>
        )
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
                    {/* Switch Over Various Actions Input */}
                    <div>

                        <input type="checkbox" value="all" name="task" className="Checkbox" onChange={(event) => this.filterItem(event)} />
                        <label htmlFor="All Tasks " >All Tasks</label>

                        <input type="checkbox" value="completed" name="task" className="Checkbox" onChange={(event) => this.filterItem(event)} />
                        <label htmlFor="Completed " >Completed</label>

                        <input type="checkbox" value="running" name="task" className="Checkbox" onChange={(event) => this.filterItem(event)} />
                        <label htmlFor="Running Task " >Running Task</label>

                    </div>
                </div>
                {
                    this.state.status === "completed" ?
                        this.state.taskEnd.length > 0 ? <h1>You have completed {this.state.list.length} tasks</h1> : <h1>Complete Some Tasks</h1>
                        : this.state.list.length > 0 ? <h1>You have {this.state.list.length} tasks to do</h1> : <h1>Add Some Tasks to do</h1>


                }
                <div className="ToDoList">
                    {
                        this.displayList()
                    }
                </div>

            </div>
        )
    }
}


export default Todo;


