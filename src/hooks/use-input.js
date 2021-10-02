import {useState} from 'react'

 const useInput = (validateValue) => {
    const[enteredVal,setEnteredVal] = useState('');
    const[isTouched,setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredVal);
    const hasError = !valueIsValid && isTouched;


    const valueChangeHandler = (event) =>{
        setEnteredVal(event.target.value);
      }
    const inputBlurHandler = () => {
        setIsTouched(true);
      }

      const reset = () =>{
          setEnteredVal('');
          setIsTouched(false);
      }

    return {
        value:enteredVal,isValid:valueIsValid,hasError:hasError,valueChangeHandler,inputBlurHandler,reset
    };
}

export default useInput;
