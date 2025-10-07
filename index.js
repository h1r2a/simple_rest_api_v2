const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());
let users = [
 { id: uuidv4(), name: 'Joyce', email: 'joyce@gmail.com' }
];
// GET all
app.get('/users', (req, res) => {
 res.json(users);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));