import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Checkbox = ({ key, label,  }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" 
                onChange={event => handleChange(key, event)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">{label}</label>
        </div>
    )
}

export default Checkbox
