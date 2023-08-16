export default function GeneralInfo( { dataList, editedIds, editData, changeData, saveData } ) {
    const info = dataList.find(item => item.type === 'general');

    function handleSave(e) {
        e.preventDefault();
        saveData(info.id);
    }

    if (editedIds.includes(info.id)) {
        return (
            <form id={info.id}>
                <label>Name: <input name="name" type="text" autoComplete="name" onChange={(e) => changeData(e, info.id)} value={info.name}></input></label>
                <label>Title: <input name="title" type="text" autoComplete="organization-title" onChange={(e) => changeData(e, info.id)} value={info.title}></input></label>
                <label>Email: <input name="email" type="email" autoComplete="email" onChange={(e) => changeData(e, info.id)} value={info.email}></input></label>
                <label>Phone: <input name="tel" type="tel" autoComplete="tel" onChange={(e) => changeData(e, info.id)} value={info.tel}></input></label>
                <div className="button-wrapper">
                    <button type="submit" onClick={handleSave}>Save</button>
                </div>
            </form>
        )
    } else {
        return (
            <>
                <div className="general">
                    <h3>{info.name}</h3>
                    <div>{info.title}</div>
                    <div>
                        <div>{info.email}</div>
                        <div>{info.tel}</div>
                    </div>
                </div>
                <button onClick={() => editData(info.id)}>Edit</button>
            </>
        )
    }
    
}