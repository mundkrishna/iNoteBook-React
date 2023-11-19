import React, { useState } from "react";
import NoteContext from "./NoteContext";
import axios from "axios";

const NoteState = (props) => {

    const notesInitial = [];

    // const notesInitial = [
    //     {
    //         "_id": "6132201",
    //         "user": "6131d",
    //         "title": "My Title 1",
    //         "description": "Please wake up early",
    //         "tag": "personal",
    //         "date": "2023-10-27",
    //         "_v": 0
    //     },
    //     {
    //         "_id": "6132202",
    //         "user": "6131d",
    //         "title": "My Title 2",
    //         "description": "Please wake up early",
    //         "tag": "personal",
    //         "date": "2023-10-27",
    //         "_v": 0
    //     },
    //     {
    //         "_id": "6132203",
    //         "user": "6131d",
    //         "title": "My Title 3",
    //         "description": "Please wake up early",
    //         "tag": "personal",
    //         "date": "2023-10-27",
    //         "_v": 0
    //     },
    //     {
    //         "_id": "6132204",
    //         "user": "6131d",
    //         "title": "My Title 4",
    //         "description": "Please wake up early",
    //         "tag": "personal",
    //         "date": "2023-10-27",
    //         "_v": 0
    //     },
    //     {
    //         "_id": "6132205",
    //         "user": "6131d",
    //         "title": "My Title 5",
    //         "description": "Please wake up early",
    //         "tag": "personal",
    //         "date": "2023-10-27",
    //         "_v": 0
    //     },
    //     {
    //         "_id": "6132206",
    //         "user": "6131d",
    //         "title": "My Title 6",
    //         "description": "Please wake up early",
    //         "tag": "personal",
    //         "date": "2023-10-27",
    //         "_v": 0
    //     },
    //     {
    //         "_id": "6132207",
    //         "user": "6131d",
    //         "title": "My Title 7",
    //         "description": "Please wake up early",
    //         "tag": "personal",
    //         "date": "2023-10-27",
    //         "_v": 0
    //     }
    // ];

    const [notes, setNotes] = useState(notesInitial);


    // API Call using Axios


    // const client = axios.create({
    //     baseURL: "https://run.mocky.io/v3/a178cfac-5e28-4914-a0d5-341932aab988"
    // })

    // // Fetch all data(notes) from the website/server/api - use GET method
    // const fetchNotes = async () => {
    //     const response = await client.get('');
    //     console.log(response);
    //     setNotes(response.data);
    // }

    // // Add data(note) to the website/server/api - use POST method
    // const addNote = async (title, description, tag) => {
    //     const response = await client.post('', {
    //         title,
    //         description,
    //         tag
    //     });
    //     setNotes([response.data, ...notes])
    // }

    // // Delete a note from the website/server/api - use DELETE method
    // const deleteNote = async (id) => {
    //     await client.delete(`${id}`);
    //     setNotes(notes.filter((note) => note._id !== id));
    // }

    // // Update or edit the note - use UPDATE method
    // const updateNote = () => {
    //     const response = client.update
    // }


    // API Call using Fetch
    // Get all notes
    const getAllNotes = async () => {
        // API call
        const url = "https://run.mocky.io/v3/a178cfac-5e28-4914-a0d5-341932aab988";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        });
        const json = await response.json();
        setNotes(json);
    }

    // Add a note
    const addNotes = async (title, description, tag) => {
        // API call
        const url = "https://run.mocky.io/v3/a178cfac-5e28-4914-a0d5-341932aab988";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        // console.log("Added a new note " + json);
        setNotes(notes.concat(json));


        // Logic to add notes through client
        // const note = {
        //     "_id": "6132207",
        //     "user": "6131d",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "date": "2023-10-27",
        //     "_v": 0
        // };
        // setNotes(notes.concat(note));
    }

    // Delete a note
    const deleteNotes = async (id) => {
        // API call
        const url = `https://run.mocky.io/v3/a178cfac-5e28-4914-a0d5-341932aab988`
        await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const newNotes = notes.filter((note) => note._id !== id);
        // console.log("Deleted the note with id " + id);
        setNotes(newNotes);

        // Logic to delete in client
        //console.log("Deleting the node with id " + id);
        // const newNotes = notes.filter((note) => note._id !== id);
        // setNotes(newNotes);
    }

    // Edit a note
    const editNotes = async (id, title, description, tag) => {
        // API call
        const url = `https://run.mocky.io/v3/a178cfac-5e28-4914-a0d5-341932aab988`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        setNotes(json);

        // Logic to edit in client
        const newNote = notes.map((note) => {
            if (note._id === id) {
                return { title, description, tag };
            }
            return note;
        })
        setNotes(newNote);
    }



    return (
        <NoteContext.Provider value={{ notes, getAllNotes, addNotes, deleteNotes, editNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;