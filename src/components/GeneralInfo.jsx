import { useState } from "react";

export default function GeneralInfo() {
    const [hasEdits, setHasEdits] = useState(false);

    function handleEdit() {
        setHasEdits(true);
    }

    function handleSave(e) {
        e.preventDefault();
        setHasEdits(false);
        //update the output
    }
    
    return (
        <form>
            <label>Name: <input type="text" autoComplete="name" onChange={handleEdit}></input></label>
            <label>Title: <input type="text" autoComplete="organization-title" onChange={handleEdit}></input></label>
            <label>Email: <input type="email" autoComplete="email" onChange={handleEdit}></input></label>
            <label>Phone: <input type="tel" autoComplete="tel" onChange={handleEdit}></input></label>
            <button type="submit" disabled={!hasEdits} onClick={handleSave}>Save</button>
        </form>
    )
}