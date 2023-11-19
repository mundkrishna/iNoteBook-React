import React, { useContext, useState } from 'react'
import noteContext from '../context/nodes/NoteContext';

export default function AddNote() {
    const context = useContext(noteContext);
    const { addNotes } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addNotes(note.title, note.description, note.tag);
        // console.log(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
    }

    return (
        <div>
            <div className="container my-3">
                <h2>Add a Note</h2>
                <form className="my-3" onSubmit={handleFormSubmit} >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="titleHelp" onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} />
                    </div>
                    <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary">Add Note</button>
                </form>
            </div>
        </div>
    )
}
