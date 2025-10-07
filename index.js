const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());
let users = [
<<<<<<< HEAD
 { id: uuidv4(), name: 'Rochel', email: 'rochel@example.com' }
];


app.put('/users/:id', (req, res) => {
 const { name, email } = req.body;
 const idx = users.findIndex(u => u.id === req.params.id);
 if (idx === -1) return res.status(404).json({ error: 'User not found' });
 users[idx] = { ...users[idx], name: name ?? users[idx].name, email: email ?? users[idx].email
};
 res.json(users[idx]);
=======
 { id: uuidv4(), name: 'Joyce', email: 'joyce@gmail.com' }
];
// GET all
app.get('/users', (req, res) => {
 res.json(users);
>>>>>>> 3af23c2af6d2b53927d30d36d463521f7746a243
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));