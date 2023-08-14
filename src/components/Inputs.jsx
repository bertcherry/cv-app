import { useState } from "react";
import InputSection from "./InputSection";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

export default function Inputs( {dataList, editedIds, createWork, createEducation, editData, saveData, deleteData }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='inputs'>
            <InputSection title='General Information' isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
                <GeneralInfo dataList={dataList} editedIds={editedIds} editData={editData} saveData={saveData}></GeneralInfo>
            </InputSection>
            <InputSection title='Work Experience' isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                <WorkExperience editedIds={editedIds} dataList={dataList} createWork={createWork} editData={editData} saveData={saveData} deleteData={deleteData}></WorkExperience>
            </InputSection>
            <InputSection title='Education' isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}>
                <Education editedIds={editedIds} dataList={dataList} createEducation={createEducation} editData={editData} saveData={saveData} deleteData={deleteData}></Education>
            </InputSection>
        </div>
    )
}