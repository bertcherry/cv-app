import { useState } from "react";

export default function Inputs() {
    const [activeSection, setActiveSection] = useState('general');
    return (
        <div className='inputs'>
            <InputSection id='general' isActive={activeSection === 'general'} onShow={() => setActiveSection('general')}/>
            <InputSection id='work' isActive={activeSection === 'work'} onShow={() => setActiveSection('work')}/>
            <InputSection id='education' isActive={activeSection === 'education'} onShow={() => setActiveSection('education')}/>
        </div>
    )
}