import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uuid from "react-uuid";

export default function WorkExperience() {
    const work = () => {
        return {
            id: uuid(),
            company: '',
            title: '',
            location: '',
            description: '',
            startDate: '',
            endDate: '',
        }
    }

    const [workList, setWorkList] = useState([work()]);
        //initialization is inconsistent - sometimes the first form value gets its uuid and other times doesn't
        //values reset on "show" -- hold them higher up?
    const [hasEdits, setHasEdits] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleNew(e) {
        e.preventDefault();
        setWorkList([...workList, work()]);
    }

    function handleEdit() {
        //set the date changes to also count as having edits and therefore being saveable
        setHasEdits(true);
    }

    function handleSave(e, itemId) {
        e.preventDefault();
        setHasEdits(false);
        const itemForm = document.getElementById(itemId);
        let updatedItem = workList.find(workItem => workItem.id === itemId);
        updatedItem.company = itemForm.elements["company"].value;
        updatedItem.title = itemForm.elements["title"].value;
        updatedItem.location = itemForm.elements["location"].value;
        updatedItem.description = itemForm.elements["description"].value;
        updatedItem.startDate = itemForm.elements["startDate"].value;
        updatedItem.endDate = itemForm.elements["endDate"].value;
        setWorkList([
            workList.filter(workItem => workItem.id !== itemId), 
            updatedItem
        ])
        //everything anchored to the id for the workItem based on uuId
        //figure out how to handle the default submit behavior when passing event info upward
        //update the output - needs to be handled higher
    }
    
    function handleDelete(itemId) {
        setWorkList(workList.filter(workItem => workItem.id !== itemId));
        console.log(workList);
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