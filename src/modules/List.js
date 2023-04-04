import Project from './Project'

export default class List {
    constructor(){
        this.projectList = []
        this.projectList.push(new Project('General'))
        this.projectList.push(new Project('Due Today'))
        this.projectList.push(new Project('Due This Week'))
    }
    
    setProjects(projectsInput){
        this.projectList = projectsInput
    }

    getProjects(){
        return this.projectList
    }

    addProject(newProject){
        if(this.projectList.find((project) => project.getName() = newProject)){
            return
        }
        else {
            this.projectList.push(newProject)
        }
    }

    deleteProject(delProject){
        const selectedProject = this.projectList.find((project) => project.getName() === delProject)
        this.projectList.splice(this.projectList.indexOf(selectedProject), 1)
    }

    getExactProject(query){
        return this.projectList.find((project) => project.getName() === query)
    }

    getContainsProject(query){
        return this.projectList.some((project) => project.getName() === query)
    }

    getEveryTaskToday(){
        this.dailyTaskList = []
        this.projectList.forEach((project) => {
            const dailyTasks = project.getDailyTasks()
            this.dailyTaskList.push(dailyTasks)
        })
        return this.dailyTaskList
    }

    getEveryTaskWeekly(){
        this.weeklyTaskList = []
        this.projectList.forEach((project) => {
            const weeklyTasks = project.getWeeklyTasks()
            this.weeklyTaskList.push(weeklyTasks)
        })
        return this.weeklyTaskList
    }

    refreshToday() {
        this.getExactProject('Due Today').taskList = getEveryTaskToday()
    }

    refreshWeek() {
        this.getExactProject('Due This Week').taskList = this.getEveryTaskWeekly()
    }


}