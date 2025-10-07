const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());
let users = [ { id: uuidv4(), name: 'Rochel', email: 'rochel@example.com' }];

// POST create
app.post('/users', (req, res) => {
const { name, email } = req.body;
if (!name || !email) return res.status(400).json({ error: 'Missing name or email' });
const newUser = { id: uuidv4(), name, email };
users.push(newUser);
res.status(201).json(newUser);
});

// PUT update
app.put('/users/:id', (req, res) => {
const { name, email } = req.body;
const idx = users.findIndex(u => u.id === req.params.id);
if (idx === -1) return res.status(404).json({ error: 'User not found' });
users[idx] = { ...users[idx], name: name ?? users[idx].name, email: email ?? users[idx].email
};

res.json(users[idx]);
});

// GET all
app.get('/users', (req, res) => {
 res.json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
