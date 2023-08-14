export default function Education( { editedIds, dataList, createEducation, editData, saveData, deleteData } ) {
    function handleNew(e) {
        e.preventDefault();
        createEducation();
    }

    function handleEdit(e, itemId) {
        editData(e, itemId);
    }

    function handleSave(e, itemId) {
        e.preventDefault();
        saveData(itemId);
    }
    
    function handleDelete(itemId) {
        deleteData(itemId);
    }

    const educationList = dataList.filter(dataItem => dataItem.type === 'education');

    const educationItems = educationList.map(educationItem =>
        <form key={educationItem.id} id={educationItem.id}>
            <label>Institution Name: <input name="institution" type="text" onChange={(e) => handleEdit(e, educationItem.id)} value={educationItem.institution}></input></label>
            <label>Title of Study/Degree: <input name="title" type="text" onChange={(e) => handleEdit(e, educationItem.id)} value={educationItem.title}></input></label>
            <label>Date of Study: <input name="date" type="text" onChange={(e) => handleEdit(e, educationItem.id)} value={educationItem.date}/></label>
            <button onClick={() => handleDelete(educationItem.id)}>Delete</button>
            <button type="submit" disabled={!editedIds.includes(educationItem.id)} onClick={(e) => handleSave(e, educationItem.id)}>Save</button>
        </form>
    );

    return (
        <>
            {educationItems}
            <button onClick={handleNew}>Add New</button>
        </>
    )
}