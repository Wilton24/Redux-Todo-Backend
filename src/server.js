import express from "express";
import dotenv from "dotenv";
import { getTodos } from "./controllers/todoController.js";

dotenv.config();

const router = express.Router();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());


router.get("/", getTodos);


// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
