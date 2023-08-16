export default function WorkExperience( { editedIds, dataList, createWork, editData, changeData, saveData, deleteData } ) {
    function handleNew(e) {
        e.preventDefault();
        createWork();
    }

    function handleSave(e, itemId) {
        e.preventDefault();
        saveData(itemId);
    }

    const workList = dataList.filter(dataItem => dataItem.type === 'work');

    const workItems = workList.map(workItem => 
        {if (editedIds.includes(workItem.id)) {
            return (
                <form key={workItem.id} id={workItem.id}>
                    <label>Company Name: <input name="company" type="text" autoComplete="organization" onChange={(e) => changeData(e, workItem.id)} value={workItem.company}></input></label>
                    <label>Job Title: <input name="title" type="text" onChange={(e) => changeData(e, workItem.id)} value={workItem.title}></input></label>
                    <label>Location: <input name="location" type="text" onChange={(e) => changeData(e, workItem.id)} value={workItem.location}></input></label>
                    <label>Start Date: <input name="startDate" type="text" onChange={(e) => changeData(e, workItem.id)} value={workItem.startDate}/></label>
                    <label>End Date: <input name="endDate" type="text" onChange={(e) => changeData(e, workItem.id)} value={workItem.endDate}/></label>
                    <div className="area-wrapper">
                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" onChange={(e) => changeData(e, workItem.id)} value={workItem.description}></textarea>
                    </div>
                    <div className="button-wrapper">
                        <button onClick={() => deleteData(workItem.id)}>Delete</button>
                        <button type="submit" disabled={!editedIds.includes(workItem.id)} onClick={(e) => handleSave(e, workItem.id)}>Save</button>
                    </div>   
                </form>
            )
        } else {
            return (
                <div key={workItem.id} className="display">
                    <div className="work-wrapper">
                        <h3>{workItem.company}</h3>
                        <div className="work-wrapper">
                            <div>{workItem.title}</div>
                            <div>{workItem.location}</div>
                        </div>
                    </div>
                    <div className="work-wrapper">
                        <div>{workItem.startDate}</div> - 
                        <div>{workItem.endDate}</div>
                    </div>
                    <div>{workItem.description}</div>
                    <div className="display-button">
                        <button onClick={() => editData(workItem.id)}>Edit</button>
                    </div>
                </div>
        )}});

    return (
        <>
            {workItems}
            <button onClick={handleNew}>Add New</button>
        </>
    )
}