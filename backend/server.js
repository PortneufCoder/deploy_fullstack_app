const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Backend is listening!' });
});

app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
});