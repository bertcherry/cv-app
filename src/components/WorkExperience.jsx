export default function WorkExperience( { editedIds, dataList, createWork, editData, saveData, deleteData } ) {
    function handleNew(e) {
        e.preventDefault();
        createWork();
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

    const workList = dataList.filter(dataItem => dataItem.type === 'work');

    const workItems = workList.map(workItem =>
            <form key={workItem.id} id={workItem.id}>
                <label>Company Name: <input name="company" type="text" autoComplete="organization" onChange={(e) => handleEdit(e, workItem.id)} value={workItem.company}></input></label>
                <label>Job Title: <input name="title" type="text" onChange={(e) => handleEdit(e, workItem.id)} value={workItem.title}></input></label>
                <label>Location: <input name="location" type="text" onChange={(e) => handleEdit(e, workItem.id)} value={workItem.location}></input></label>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" onChange={(e) => handleEdit(e, workItem.id)} value={workItem.description}></textarea>
                <label>Start Date: <input name="startDate" type="text" onChange={(e) => handleEdit(e, workItem.id)} value={workItem.startDate}/></label>
                <label>End Date: <input name="endDate" type="text" onChange={(e) => handleEdit(e, workItem.id)} value={workItem.endDate}/></label>
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