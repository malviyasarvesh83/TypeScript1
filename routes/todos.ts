import { Router } from 'express';
import { Todo } from '../models/todos';

const todos: Todo[] = [];

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ todos: todos });
})

router.post('/todo', (req, res) => {
    const newTodos: Todo = {
        id: new Date().toISOString(),
        text:req.body.text
    };

    todos.push(newTodos);
})

export default router;