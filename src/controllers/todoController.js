import pool from "../config/db.js";

// async function getTodos(req, res) {
//     // Sample static data
//     const todos = [
//         { id: 1, task: "Learn Node.js", completed: false },
//         { id: 2, task: "Build a REST API", completed: false },
//         { id: 3, task: "Integrate with Redux", completed: false },
//     ];
//     res.json(todos);
// }

// export { getTodos };

async function getTodos(req, res) {
    try {
        const result = await pool.query("SELECT * FROM todos ORDER BY id DESC");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



async function postTodo(req, res) {
    const { text } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO todos (text) VALUES ($1) RETURNING *",
            [text]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
