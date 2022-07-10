import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Number = ({ key, label,  }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                
                onChange={event => handleChange(key, event)}
            />
        </div>
    )
}

export default Number
