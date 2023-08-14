import { useState } from "react"
import uuid from "react-uuid";
import Inputs from "./Inputs"

export default function Data() {
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
        }
    }
    
    const [workList, setWorkList] = useState([work()]);

    function createWork() {
        setWorkList([...workList, work()]);
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
        setWorkList([
            workList.filter(workItem => workItem.id !== itemId), 
            updatedItem
        ]);
    }
        
    function deleteWork(itemId) {
        setWorkList(workList.filter(workItem => workItem.id !== itemId));
    }

    return (
        <div>
            <Inputs workList={workList} createWork={createWork} saveWork={saveWork} deleteWork={deleteWork}></Inputs>
        </div>
    )
}
