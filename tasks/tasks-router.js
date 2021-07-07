const express = require("express")

const task = require("./tasks-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const tasks = await task.getTasks()
        res.json(tasks)
    } catch(err) {
        next(err)
    }
})

router.post('/', (req, res) => {
    const taskData = req.body;

    task.add(taskData)
        .then(task => {
        res.status(201).json(task);
    })
        .catch (err => {
        res.status(500).json({ message: 'Failed to create new task', err });
    });
})

module.exports = router;
