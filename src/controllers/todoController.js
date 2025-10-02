import pool from "../config/db.js";

async function getTodos(req, res) {
    try {
        const result = await pool.query("SELECT * FROM todos ORDER BY id DESC");
        res.json(result.rows);

        console.log("GET /todos called");

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

export { getTodos, postTodo };
