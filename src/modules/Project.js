import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

export default class Project {
    constructor(name){
        this.name = name
        this.taskList = []
    }
    
    setName(name){
        this.name = name
    }

    getName(){
        return this.name
    }
    
    setTaskList(taskList){
        this.taskList = taskList
    }

    getTaskList(){
        return taskList
    }

    addTask(newTask){
        if (this.taskList.find((task) => task.getName() === newTask.name)){
            return
        }
        else {
            this.taskList.push(newTask)
        }
    }

    deleteTask(delTaskName){
        this.taskList = this.taskList.filter((task) => task.name !== delTaskName)
    }

    getExactTask(searchTaskName){
        return this.taskList.find((task) => task.getName() === searchTaskName)
    }

    getContainsTask(searchTaskName){
        return this.taskList.some((task) => task.getName() === searchTaskName)
    }

    getWeeklyTasks(){
        return this.taskList.filter((task) => {
            const tDate = new Date(task.getDate())
            return isThisWeek(subDays(toDate(tDate), 1))
        })
    }

    getDailyTasks(){
        return this.taskList.filter((task) => {
            const tDate = new Date(task.getDate())
            return isToday(toDate(tDate))
        })
    }
}