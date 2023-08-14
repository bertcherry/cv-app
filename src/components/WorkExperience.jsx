import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function WorkExperience( { workList, createWork, saveWork, deleteWork } ) {
    const [hasEdits, setHasEdits] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleNew(e) {
        e.preventDefault();
        createWork();
    }

    function handleEdit() {
        //set the date changes to also count as having edits and therefore being saveable
        setHasEdits(true);
    }

    function handleSave(e, itemId) {
        e.preventDefault();
        setHasEdits(false);
        saveWork(itemId);
    }
    
    function handleDelete(itemId) {
        deleteWork(itemId);
    }

    const workItems = workList.map(workItem =>
            <form key={workItem.id} id={workItem.id}>
                <label>Company Name: <input name="company" type="text" autoComplete="organization" onChange={handleEdit}></input></label>
                <label>Job Title: <input name="title" type="text" onChange={handleEdit}></input></label>
                <label>Location: <input name="location" type="text" onChange={handleEdit}></input></label>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea>
                <label htmlFor="startDate">Start Date:</label>
                <ReactDatePicker name="startDate" id="startDate" selected={startDate} onChange={(date) => setStartDate(date)}/>
                <label htmlFor="endDate">End Date:</label>
                <ReactDatePicker name="endDate" id="endDate" selected={endDate} onChange={(date) => setEndDate(date)}/>
                <button onClick={() => handleDelete(workItem.id)}>Delete</button>
                <button type="submit" disabled={!hasEdits} onClick={(e) => handleSave(e, workItem.id)}>Save</button>
            </form>
        );

    return (
        <>
            {workItems}
            <button onClick={handleNew}>Add New</button>
        </>
    )
}