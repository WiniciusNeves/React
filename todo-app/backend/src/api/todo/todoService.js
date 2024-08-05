const express = require('express');
const Todo = require('./todo');

const router = express.Router();

// GET todos
router.get('/', async (req, res) => {
    try {
        const { sort, description } = req.query;

        // Construindo o objeto de consulta
        let query = {};
        if (description) {
            query.description = { $regex: description, $options: 'i' }; // Regex para busca insensível a maiúsculas/minúsculas
        }

        // Configurando ordenação
        const sortOptions = sort ? { [sort.replace('-', '')]: sort.startsWith('-') ? -1 : 1 } : {};

        const todos = await Todo.find(query).sort(sortOptions);
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST todo
router.post('/', async (req, res) => {
    try {
        const todo = new Todo(req.body);
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT todo
router.put('/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE todo
router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
