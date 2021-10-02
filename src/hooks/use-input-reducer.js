import {useReducer} from 'react'


const initialInputState = {
    value:'',
    isTouched:false
}
const inputReducer = (state,actionParam) =>{
    if(actionParam.type==='CHANGE'){
        return {
            value:actionParam.value,
            isTouched:state.isTouched
            }
        }
        if(actionParam.type==='BLUR'){
        return {
            value:state.value,
            isTouched:true
            }
        }
        if(actionParam.type==='RESET'){
            return initialInputState;
        }

    return initialInputState;
}
 const useInputReducer = (validateValue) => {
    const[inputState,dispatch] = useReducer(inputReducer,initialInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;


    const valueChangeHandler = (event) =>{
        dispatch({
            type:'CHANGE',
            value:event.target.value
        })
      }
    const inputBlurHandler = () => {
        dispatch({
            type:'BLUR',
        });
      }

      const reset = () =>{
          dispatch({
              type:'RESET',
          });
      }

    return {
        value:inputState.value,isValid:valueIsValid,hasError:hasError,valueChangeHandler,inputBlurHandler,reset
    };
}

export default useInputReducer;
