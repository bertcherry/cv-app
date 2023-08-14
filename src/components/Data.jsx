import { useState } from "react"
import uuid from "react-uuid";
import Inputs from "./Inputs"

export default function Data() {
    const [editedIds, setEditedIds] = useState([]);

    //General Info
    const [info, setInfo] = useState({
        id: 'generalInfo',
        name: '',
        title: '',
        email: '',
        tel: '',
    });

    function editGeneral(e) {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
        if (!editedIds.includes('generalInfo')) {
            setEditedIds([...editedIds, 'generalInfo']);
        }
    }

    function saveGeneral() {
        setEditedIds(editedIds.filter(element => element !== 'generalInfo'));
    }

    //Work Experience props and logic
    const work = () => {
        return {
            id: uuid(),
            company: '',
            title: '',
            location: '',
            description: '',
            startDate: '',
            endDate: '',
            edited: false,
        }
    }
    
    const [workList, setWorkList] = useState([work()]);

    function createWork() {
        setWorkList([...workList, work()]);
    }

    function editWorkValue(itemId, name) {
        const itemForm = document.getElementById(itemId);
        let editedItem = workList.find(workItem => workItem.id === itemId);
        editedItem[name] = itemForm.elements[name].value;
        if (!editedIds.includes(itemId)) {
            setEditedIds([...editedIds, itemId]);
        }
    }

    function saveWork(itemId) {
        const itemForm = document.getElementById(itemId);
        let updatedItem = workList.find(workItem => workItem.id === itemId);
        updatedItem.company = itemForm.elements["company"].value;
        updatedItem.title = itemForm.elements["title"].value;
        updatedItem.location = itemForm.elements["location"].value;
        updatedItem.description = itemForm.elements["description"].value;
        updatedItem.startDate = itemForm.elements["startDate"].value;
        updatedItem.endDate = itemForm.elements["endDate"].value;
        updatedItem.edited = false;
        console.log(updatedItem);
        setWorkList(
            workList.map(workItem => {
                if (workItem.id === itemId) {
                    return updatedItem;
                } else {
                    return workItem;
                }
            })
        );
        setEditedIds(editedIds.filter(element => element !== itemId));
    }
        
    function deleteWork(itemId) {
        setWorkList(workList.filter(workItem => workItem.id !== itemId));
    }

    return (
        <div>
            <Inputs info={info} editGeneral={editGeneral} saveGeneral={saveGeneral} editedIds={editedIds} workList={workList} createWork={createWork} editWorkValue={editWorkValue} saveWork={saveWork} deleteWork={deleteWork}></Inputs>
        </div>
    )
}
