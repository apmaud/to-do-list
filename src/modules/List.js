import Project from './Project'
import Task from './Task'

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

    findProject(projectQuery){
        
    }
}