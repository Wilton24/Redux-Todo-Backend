import express from "express";
import { getTodos, postTodo } from "../controllers/todoController.js";

const router = express.Router();

// Get all todos
router.get("/", getTodos);

// Create a new todo
router.post("/", postTodo);

export default router;
