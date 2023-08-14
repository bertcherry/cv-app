import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function WorkExperience( { editedIds, workList, createWork, editWorkValue, saveWork, deleteWork } ) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleNew(e) {
        e.preventDefault();
        createWork();
    }

    function handleEdit(itemId, name) {
        //set the date changes to also count as having edits and therefore being saveable
        editWorkValue(itemId, name);
    }

    function handleSave(e, itemId) {
        e.preventDefault();
        saveWork(itemId);
    }
    
    function handleDelete(itemId) {
        deleteWork(itemId);
    }

    //set the input fields to display the values of each saved section on re-render
    const workItems = workList.map(workItem =>
            <form key={workItem.id} id={workItem.id}>
                <label>Company Name: <input name="company" type="text" autoComplete="organization" onChange={() => handleEdit(workItem.id, "company")}></input></label>
                <label>Job Title: <input name="title" type="text" onChange={() => handleEdit(workItem.id, "title")}></input></label>
                <label>Location: <input name="location" type="text" onChange={() => handleEdit(workItem.id, "location")}></input></label>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" onChange={() => handleEdit(workItem.id, "description")}></textarea>
                <label htmlFor="startDate">Start Date:</label>
                <ReactDatePicker name="startDate" id="startDate" selected={startDate} onChange={(date) => setStartDate(date)}/>
                <label htmlFor="endDate">End Date:</label>
                <ReactDatePicker name="endDate" id="endDate" selected={endDate} onChange={(date) => setEndDate(date)}/>
                <button onClick={() => handleDelete(workItem.id)}>Delete</button>
                <button type="submit" disabled={!editedIds.includes(workItem.id)} onClick={(e) => handleSave(e, workItem.id)}>Save</button>
            </form>
        );

    return (
        <>
            {workItems}
            <button onClick={handleNew}>Add New</button>
        </>
    )
}