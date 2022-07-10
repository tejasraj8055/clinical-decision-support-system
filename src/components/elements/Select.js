import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Select = ({ key, label,items }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <>
            <label className="form-label">{label}</label>
            <select className="form-select" aria-label="Default select example"
                onChange={event => handleChange(key, event)}
            >
                <option >Open this select menu</option>
                { items.map((option, i) =>
                    <option value={option.text} key={i}>{option.text}</option>

                )}
            </select>
        </>
    )
}

export default Select
