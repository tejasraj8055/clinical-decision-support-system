import React from 'react'
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Select from './elements/Select';
import Date from './elements/Date'
import Number from './elements/Number'
const Element = ({ field: { type, key, label,items } }) => {

    switch (type) {
        case 'text':
            return (<Input
                key={key}
                label={label}
            />)
            case 'number':
            return (<Number
                key={key}
                label={label}
            />)
            case 'date':
            return (<Date
                key={key}
                label={label}
            />)
        case 'dropdown':
            return (<Select
                key={key}
                label={label}
                items={items}
            />)
        case 'checkbox':
            return (<Checkbox
                key={key}
                label={label}
            />)

        default:
            return null;
    }


}

export default Element