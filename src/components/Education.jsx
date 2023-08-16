export default function Education( { editedIds, dataList, createEducation, editData, changeData, saveData, deleteData } ) {
    function handleNew(e) {
        e.preventDefault();
        createEducation();
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

    const educationList = dataList.filter(dataItem => dataItem.type === 'education');

    const educationItems = educationList.map(educationItem =>
        {if (editedIds.includes(educationItem.id))
            return (
                <form key={educationItem.id} id={educationItem.id}>
                    <label>Institution Name: <input name="institution" type="text" onChange={(e) => handleChange(e, educationItem.id)} value={educationItem.institution}></input></label>
                    <label>Title of Study/Degree: <input name="title" type="text" onChange={(e) => handleChange(e, educationItem.id)} value={educationItem.title}></input></label>
                    <label>Date of Study: <input name="date" type="text" onChange={(e) => handleChange(e, educationItem.id)} value={educationItem.date}/></label>
                    <div className="button-wrapper">
                        <button onClick={() => handleDelete(educationItem.id)}>Delete</button>
                        <button type="submit" disabled={!editedIds.includes(educationItem.id)} onClick={(e) => handleSave(e, educationItem.id)}>Save</button>
                    </div>
                </form>
            )
        else return (
            <div key={educationItem.id} className="display">
                <h3>{educationItem.institution}</h3>
                <div>{educationItem.title}</div>
                <div>{educationItem.date}</div>
                <div className="display-button">
                    <button onClick={() => handleEdit(educationItem.id)}>Edit</button>
                </div>
            </div>
    )});

    return (
        <>
            {educationItems}
            <button onClick={handleNew}>Add New</button>
        </>
    )
}