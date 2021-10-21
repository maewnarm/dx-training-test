export const JSONfetch = async () => {
    const url = `https://jsonplaceholder.typicode.com/users`
    const fetchOptions = {
        method: `GET`,
    }

    const res = await fetch(url,fetchOptions)
    if (res.status !== 200) throw new Error(res.statusText)

    const data = await res.json()
    console.log(data)
    return data
}

export const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos',{
        method: `GET`
    })
    if (res.status !== 200) throw new Error(res.statusText)
    
    const todos = await res.json()
    return todos
}