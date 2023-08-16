import { useState } from "react"
import uuid from "react-uuid";
import Section from "./Section";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

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

    const [editedIds, setEditedIds] = useState([dataList.at(0).id, dataList.at(1).id, dataList.at(2).id]);
    
    function createWork() {
        const newWork = work();
        setDataList([...dataList, newWork]);
        setEditedIds([...editedIds, newWork.id]);
    }

    function createEducation() {
        const newEducation = education();
        setDataList([...dataList, newEducation]);
        setEditedIds([...editedIds, newEducation.id]);
    }

    function editData(itemId) {
        setEditedIds([...editedIds, itemId]);
    }

    function changeData(e, itemId) {
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
    }

    function saveData(itemId) {
        setEditedIds(editedIds.filter(element => element !== itemId));
    }
        
    function deleteData(itemId) {
        setDataList(dataList.filter(dataItem => dataItem.id !== itemId));
    }

    return (
        <>
            <Section title='General Information'>
                <GeneralInfo dataList={dataList} editedIds={editedIds} editData={editData} changeData={changeData} saveData={saveData}></GeneralInfo>
            </Section>
            <Section title='Work Experience'>
                <WorkExperience editedIds={editedIds} dataList={dataList} createWork={createWork} editData={editData} changeData={changeData} saveData={saveData} deleteData={deleteData}></WorkExperience>
            </Section>
            <Section title='Education'>
                <Education editedIds={editedIds} dataList={dataList} createEducation={createEducation} editData={editData} changeData={changeData} saveData={saveData} deleteData={deleteData}></Education>
            </Section>
        </>
    )
}
