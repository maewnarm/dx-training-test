import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { toast } from 'react-toastify'
import { fetchTodos } from '../api/fetch'

interface Todos {
    id: number
    title: string
    completed: boolean
}

const showToast = () => {
    toast('Toast is shown !!')
}

export const getStaticProps: GetStaticProps = async () => {
    const todos: Todos[] = await fetchTodos()
    console.log(todos)
    console.log(typeof todos)
    console.log("got todos")
    return {
        props: {
            todos,
        }
    }
}

const Menu = ({ todos }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            <h1>Menu</h1>
            <button onClick={showToast}>
                Click to show Toast !
            </button>
            <p>here is local parameter:<strong>{process.env.NEXT_PUBLIC_DB_NAME}</strong></p>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo: Todos, idx: number) => {
                            return (
                                <tr key={idx}>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>
                                        {todo.id ?
                                            "completed"
                                            :
                                            "not yet"
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Menu