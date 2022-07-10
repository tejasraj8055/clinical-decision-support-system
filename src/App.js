

import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';
import drug2JSON from './drug2.json'
import drug1JSON from './drug1.json'
function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    setElements(drug1JSON[0])

  }, [])
  const { fields, } = elements ?? {}
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(elements)
  }
  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { type, field_id } = field;
      if (id === field_id) {
        switch (type) {
          case 'checkbox':
            field[''] = event.target.checked;
            break;

          default:
            field[''] = event.target.value;
            break;
        }


      }
      setElements(newElements)
    });
    console.log(elements)
  }
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        
        <form>
          {fields ? fields.map((field, i) => <Element key={i} field={field} />) : null}
          <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>

      </div>
    </FormContext.Provider>
  );
}

export default App;