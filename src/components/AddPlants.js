import React from 'react';

const AddPlant = (props) => {

    const [values, setValues] = useState();
    const [inUse, setInUse] = useState(true);
  
    const onSubmit = (e) => {
      e.preventDefault();
      const newPlant = values;
      props.addPlant(newPlant);
      setValues(e.target.value);
    };
  
   const getFormState = (state) => {
      setValues(state.values);
      setInUse(state.inUse);
   }
    
    return (
      <div className="form-container">
        <h2>Add New Plant</h2>
        <form onSubmit={onSubmit}>
        <button type="submit" inUse={inUse}>Add Plant?</button>
        </form>
      </div>
    )
  };

export default AddPlant;