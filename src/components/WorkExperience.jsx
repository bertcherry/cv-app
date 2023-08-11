import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function WorkExperience() {
    const [hasEdits, setHasEdits] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleEdit() {
        setHasEdits(true);
    }

    function handleDelete() {
        //remove this work experience section from the state - may need to be handled higher
    }

    function handleSave(e) {
        e.preventDefault();
        setHasEdits(false);
        //update the output - may need to be handled higher
    }
    
    return (
        <form>
            <label>Company Name: <input type="text" autoComplete="organization" onChange={handleEdit}></input></label>
            <label>Job Title: <input type="text" onChange={handleEdit}></input></label>
            <label>Location: <input type="text" onChange={handleEdit}></input></label>
            <label htmlFor="description">Description:</label>
            <textarea id="description"></textarea>
            <label htmlFor="startDate">Start Date:</label>
            <ReactDatePicker id="startDate" selected={startDate} onChange={(date) => setStartDate(date)}/>
            <label htmlFor="endDate">End Date:</label>
            <ReactDatePicker id="endDate" selected={endDate} onChange={(date) => setEndDate(date)}/>
            <button onClick={handleDelete}>Delete</button>
            <button type="submit" disabled={!hasEdits} onClick={handleSave}>Save</button>
        </form>
    )
}