class ToDo {
  todos = fetch('https://jsonplaceholder.typicode.com/todos/?_5')
    .then((response: Response) => response.json())
    .then((json: JSON) => console.log(json));
}

export default new ToDo();