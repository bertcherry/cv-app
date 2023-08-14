export default function GeneralInfo( { dataList, editedIds, editData, saveData } ) {
    const info = dataList.find(item => item.type === 'general');

    function handleEdit(e) {
        editData(e, info.id);
    }

    function handleSave(e) {
        e.preventDefault();
        saveData(info.id);
        //update the output - done by lifting the state to the top
    }

    //if this isn't edited (in editedIds), display the output html and edit button
    return (
        <form id={info.id}>
            <label>Name: <input name="name" type="text" autoComplete="name" onChange={handleEdit} value={info.name}></input></label>
            <label>Title: <input name="title" type="text" autoComplete="organization-title" onChange={handleEdit} value={info.title}></input></label>
            <label>Email: <input name="email" type="email" autoComplete="email" onChange={handleEdit} value={info.email}></input></label>
            <label>Phone: <input name="tel" type="tel" autoComplete="tel" onChange={handleEdit} value={info.tel}></input></label>
            <button type="submit" disabled={!editedIds.includes(info.id)} onClick={handleSave}>Save</button>
        </form>
    )
}