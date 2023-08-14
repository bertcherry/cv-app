import { useState } from "react";
import InputSection from "./InputSection";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperience";

export default function Inputs( {info, editGeneral, saveGeneral, editedIds, workList, createWork, editWork, saveWork, deleteWork }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='inputs'>
            <InputSection title='General Information' isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
                <GeneralInfo info={info} editedIds={editedIds} editGeneral={editGeneral} saveGeneral={saveGeneral}></GeneralInfo>
            </InputSection>
            <InputSection title='Work Experience' isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                <WorkExperience editedIds={editedIds} workList={workList} createWork={createWork} editWork={editWork} saveWork={saveWork} deleteWork={deleteWork}></WorkExperience>
            </InputSection>
            <InputSection title='Education' isActive={activeIndex === 2} onShow={() => setActiveIndex(2)}>
                <></>
            </InputSection>
        </div>
    )
}