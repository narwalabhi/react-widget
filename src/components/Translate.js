import React, { useState } from 'react';
import Convert from './Convert';
import DropDown from './DropDown';

const Translate = () => {
    const options = [
        {
            label: 'Afrikaans',
            value: 'af'
        },
        {
            label: 'Arabic',
            value: 'ar'
        },
        {
            label: 'Hindi',
            value: 'hi'
        },
        {
            label: 'Dutch',
            value: 'nl'
        }
    ]
    const [language, setLanguage] = useState(options[0]);
    const [term, setTerm] = useState('');
    

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={term} onChange={(event) => setTerm(event.target.value)}/>
                </div>
            </div>
            <DropDown options={options} selected={language} onSelectedChange={setLanguage} label="Select a language"/>
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={term} language={language}/>
        </div>
    );
}

export default Translate;