import express from "express";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();



const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());



// Mount todo routes
app.use("/api/todos", todoRoutes);

app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({ db_time: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});




// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
