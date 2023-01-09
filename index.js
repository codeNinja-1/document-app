import express from 'express';
import fs from 'fs/promises';

const app = express();

app.use(express.json());

app.use('/app', express.static('app'));

app.get('/document', async (req, res) => {
    const file = await fs.readFile('document.txt');

    res.send(file.toString());
});

app.post('/document', async (req, res) => {
    await fs.writeFile('document.txt', req.body.content);

    res.send("");
});

app.listen(80);