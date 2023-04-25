import { useLoaderData, useParams } from "react-router-dom";

export default function TodoDetails() {
    const { id } = useParams()
    const todo = useLoaderData()

    return (
        <div className="todo-details">
            <h2>Career Details for {todo.title}</h2>
            <p>Starting salary: {todo.salary}</p>
            <p>Location: {todo.location}</p>
            <div className="details">
                <p>Aliqua exercitation culpa nulla excepteur Lorem aute consectetur amet aliqua ea.
                    Amet ex cillum fugiat ipsum est dolore irure est exercitation elit sit ex qui.
                    Nisi excepteur culpa aute labore id pariatur exercitation. Velit cupidatat fugiat consequat nisi ea.
                    Dolore ut nisi tempor cillum consectetur ex minim dolor laborum incididunt ullamco dolore velit irure.</p>
            </div>
        </div>
    )
}

// loader function
export const TodoDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:9000/' + id)

    if (!res.ok) {
        throw Error("Could not find any list")
    }
    
    return res.json()
}