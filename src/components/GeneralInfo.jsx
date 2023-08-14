import { useState } from "react";

export default function GeneralInfo( { info, editGeneral, saveGeneral } ) {
    const [hasEdits, setHasEdits] = useState(false);

    function handleEdit(e) {
        setHasEdits(true);
        editGeneral(e);
    }

    function handleSave(e) {
        e.preventDefault();
        setHasEdits(false);
        saveGeneral();
        //update the output - done by lifting the state to the top
    }
    
    return (
        <form id="generalInfo">
            <label>Name: <input name="name" type="text" autoComplete="name" onChange={handleEdit} value={info.name}></input></label>
            <label>Title: <input name="title" type="text" autoComplete="organization-title" onChange={handleEdit} value={info.title}></input></label>
            <label>Email: <input name="email" type="email" autoComplete="email" onChange={handleEdit} value={info.email}></input></label>
            <label>Phone: <input name="tel" type="tel" autoComplete="tel" onChange={handleEdit} value={info.tel}></input></label>
            <button type="submit" disabled={!hasEdits} onClick={handleSave}>Save</button>
        </form>
    )
}