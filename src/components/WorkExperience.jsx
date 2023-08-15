export default function WorkExperience( { editedIds, dataList, createWork, editData, changeData, saveData, deleteData } ) {
    function handleNew(e) {
        e.preventDefault();
        createWork();
    }

    function handleChange(e, itemId) {
        changeData(e, itemId);
    }

    function handleEdit(itemId) {
        editData(itemId);
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
        {if (editedIds.includes(workItem.id)) {
            return (
                <form key={workItem.id} id={workItem.id}>
                    <label>Company Name: <input name="company" type="text" autoComplete="organization" onChange={(e) => handleChange(e, workItem.id)} value={workItem.company}></input></label>
                    <label>Job Title: <input name="title" type="text" onChange={(e) => handleChange(e, workItem.id)} value={workItem.title}></input></label>
                    <label>Location: <input name="location" type="text" onChange={(e) => handleChange(e, workItem.id)} value={workItem.location}></input></label>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" onChange={(e) => handleChange(e, workItem.id)} value={workItem.description}></textarea>
                    <label>Start Date: <input name="startDate" type="text" onChange={(e) => handleChange(e, workItem.id)} value={workItem.startDate}/></label>
                    <label>End Date: <input name="endDate" type="text" onChange={(e) => handleChange(e, workItem.id)} value={workItem.endDate}/></label>
                    <button onClick={() => handleDelete(workItem.id)}>Delete</button>
                    <button type="submit" disabled={!editedIds.includes(workItem.id)} onClick={(e) => handleSave(e, workItem.id)}>Save</button>
                </form>
            )
        } else {
            return (
                <div key={workItem.id}>
                    <div>
                        <h3>{workItem.company}</h3>
                        <div>{workItem.title}</div>
                        <div>{workItem.location}</div>
                        <div>{workItem.description}</div>
                        <div>{workItem.startDate}</div>
                        <div>{workItem.endDate}</div>
                    </div>
                    <button onClick={() => handleEdit(workItem.id)}>Edit</button>
                </div>
        )}});

    return (
        <>
            {workItems}
            <button onClick={handleNew}>Add New</button>
        </>
    )
}