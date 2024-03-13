const express = require('express')
const { createTodo, updateTodo } = require('./types.js');
const app = express()

const port = 3000;

app.use(express.json());

// body {
//     title: String;
//     description: String;
// }

app.post('/todos', (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    // Put in database i.e mongo

});
app.get('/todos', (req, res) => {
    res.send('todos')
});

app.put('/completed', (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    // Put in database i.e mongo
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;