import { numberOfTasks } from "./app-logic.js";
export function generateId() {
    return String(numberOfTasks+1)
}
