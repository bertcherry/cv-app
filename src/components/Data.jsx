import { useState } from "react"
import uuid from "react-uuid";
import Inputs from "./Inputs"

export default function Data() {
    const work = () => {
        return {
            id: uuid(),
            type: 'work',
            company: '',
            title: '',
            location: '',
            description: '',
            startDate: '',
            endDate: '',
        }
    }

    const education = () => {
        return {
            id: uuid(),
            type: 'education',
            institution: '',
            title: '',
            date: ''
        }
    }

    const [dataList, setDataList] = useState([
        {
            id: uuid(),
            type: 'general',
            name: '',
            title: '',
            email: '',
            tel: '',
        }, 
        work(),
        education()
    ]);

    const [editedIds, setEditedIds] = useState([]);
    
    function createWork() {
        setDataList([...dataList, work()]);
    }

    function createEducation() {
        setDataList([...dataList, education()]);
    }

    function editData(e, itemId) {
        setDataList(
            dataList.map(dataItem => {
                if (dataItem.id === itemId) {
                    return {
                        ...dataItem,
                        [e.target.name]: e.target.value,
                    }
                } else {
                    return dataItem;
                }
            }));
        if (!editedIds.includes(itemId)) {
            setEditedIds([...editedIds, itemId]);
        }
    }

    function saveData(itemId) {
        setEditedIds(editedIds.filter(element => element !== itemId));
    }
        
    function deleteData(itemId) {
        setDataList(dataList.filter(dataItem => dataItem.id !== itemId));
    }

    return (
        <div>
            <Inputs editedIds={editedIds} dataList={dataList} createWork={createWork} createEducation={createEducation} editData={editData} saveData={saveData} deleteData={deleteData}></Inputs>
        </div>
    )
}
