const url = "http://localhost:3001/tasks";
const headers = {
    'Content-Type': "application/json"
}
const serverAPI = {
    getAll: () => {
        return fetch(url).then((res) => res.json())
    },
    getById: (id) => {
        return fetch(`${url}/${id}`).then((res) => res.json())
    },
    add: (task) => {
        return fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(task)
        }).then((res) => res.json())
    },
    delete: (id) => {
        return fetch(`${url}/${id}`, { method: 'DELETE' })
    },
    deleteAll: (tasks) => {
        return Promise.all(tasks.map(({ id }) => serverAPI.delete(id)))
    },
    toggleCompleate: (id, isDone) => {
        return fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({ isDone })
        })
    },
}
export default serverAPI