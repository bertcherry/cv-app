import { useState } from "react";

export default function GeneralInfo() {
    const [hasEdits, setHasEdits] = useState(false);

    function logEdit() {
        setHasEdits(true);
    }

    function saveGeneral(e) {
        e.preventDefault();
        setHasEdits(false);
        //update the output
    }
    
    return (
        <form>
            <label>Name: <input type="text" autoComplete="name" onChange={logEdit}></input></label>
            <label>Title: <input type="text" autoComplete="organization-title" onChange={logEdit}></input></label>
            <label>Email: <input type="email" autoComplete="email" onChange={logEdit}></input></label>
            <label>Phone: <input type="tel" autoComplete="tel" onChange={logEdit}></input></label>
            <button type="submit" disabled={!hasEdits} onClick={saveGeneral}>Save</button>
        </form>
    )
}