async function getTodos(req, res) {
    // Sample static data
    const todos = [
        { id: 1, task: "Learn Node.js", completed: false },
        { id: 2, task: "Build a REST API", completed: false },
        { id: 3, task: "Integrate with Redux", completed: false },
    ];
    res.json(todos);
}

export { getTodos };