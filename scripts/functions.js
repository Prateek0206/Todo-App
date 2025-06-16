import { numberOfTasks } from "./app-logic.js";
export function generateId() {
    return String(numberOfTasks+1)
}

export function taskCompleted(task){
    return task
}
