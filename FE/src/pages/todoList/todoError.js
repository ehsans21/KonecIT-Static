import { Link, useRouteError } from "react-router-dom"

export default function TodoError() {
    const error = useRouteError()
    
    return (
        <div className="todo-error">
            <h2>Error from React</h2>
            <p>{error.message}</p>
            <Link to="/">Back to the homepage</Link>
        </div>
    )
}

