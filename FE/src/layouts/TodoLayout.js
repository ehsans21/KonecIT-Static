import { Outlet } from "react-router-dom";

export default function TodoLayout() {
  return (
    <div className="todo-layout">
    <h2>ToDo List</h2>
    
    <Outlet />
    </div>
  )
}