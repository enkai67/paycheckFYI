import express from "express";
import { v4 as uuidv4 } from "uuid";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let notes = [];

app.get("/notes", (req, res) => {
    res.json(notes);
});

app.post("/notes", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    const newNote = {
        id: uuidv4(),
        title,
        content,
        createdAt: new Date().toISOString()
    };

    notes.push(newNote);
    res.status(201).json(newNote);
});

app.get("/notes/:id", (req, res) => {
    const { id } = req.params;
    const note = notes.find((note) => note.id === id);

    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    res.json(note);
});

app.put("/notes/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const noteIndex = notes.findIndex((note) => note.id === id);
    if (noteIndex === -1) {
        return res.status(404).json({ error: "Note not found" });
    }

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }

    notes[noteIndex] = {
        ...notes[noteIndex],
        title,
        content,
        updatedAt: new Date().toISOString()
    };

    res.json(notes[noteIndex]);
});

app.delete("/notes/:id", (req, res) => {
    const { id } = req.params;
    const noteIndex = notes.findIndex((note) => note.id === id);

    if (noteIndex === -1) {
        return res.status(404).json({ error: "Note not found" });
    }

    const deletedNote = notes.splice(noteIndex, 1);
    res.json(deletedNote);
});

app.get("/", (req, res) => {
    res.send("東東請客記錄簿");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
