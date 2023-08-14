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

    function editWork(e, itemId) {
        setWorkList(
            workList.map(workItem => {
                if (workItem.id === itemId) {
                    return {
                        ...workItem,
                        [e.target.name]: e.target.value,
                    }
                } else {
                    return workItem;
                }
            }));
        if (!editedIds.includes(itemId)) {
            setEditedIds([...editedIds, itemId]);
        }
    }

    function saveWork(itemId) {
        setEditedIds(editedIds.filter(element => element !== itemId));
    }
        
    function deleteWork(itemId) {
        setWorkList(workList.filter(workItem => workItem.id !== itemId));
    }

    return (
        <div>
            <Inputs info={info} editGeneral={editGeneral} saveGeneral={saveGeneral} editedIds={editedIds} workList={workList} createWork={createWork} editWork={editWork} saveWork={saveWork} deleteWork={deleteWork}></Inputs>
        </div>
    )
}
