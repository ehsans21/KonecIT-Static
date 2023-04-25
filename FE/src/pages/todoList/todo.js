import { useLoaderData, Link } from "react-router-dom";

export default function Todo() {
    const todo = useLoaderData()
    return (
        <div className="todo">
            {todo.map(todo => (
                <Link to={todo.id.toString()} key={todo.id}>
                    <p>{todo.title}</p>
                    <p>Based in {todo.location}</p>
                </Link>
            ))}
        </div>
    )
}

// loader function
export const todoLoader = async () => {
    const res = await fetch('http://localhost:5000')

    if (!res.ok) {
        throw Error("Could not fetch the list")
    }

    return res.json()
}