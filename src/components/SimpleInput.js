import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const{ value: enteredName,
    isValid:enteredNameIsValid,
    hasError:inputHasError,
    valueChangeHandler:nameChangeHandler,
    inputBlurHandler:nameBlurHandler,reset:resetNameInput} = 
    useInput(value=>value.trim()!=='');

    const{ value:enteredEmailVal,
    isValid:enteredEmailIsValid,
    hasError:emailHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
    } = useInput(value=>value.includes('@'));

  

  let formIsValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    formIsValid = true;
  }
  

  const onSubmitHandler = (event) => {
      event.preventDefault();
      if(!enteredNameIsValid || !enteredEmailIsValid){
        return;
      }
      // console.log("From State:"+enteredVal);
      // const inputRefVal = inputRef.current.value;
      // console.log("From Ref:"+inputRefVal);
      // inputRef.current.value = ''; --> DONT MANIPULATE THE DOM instead update the state to empty the field
      resetNameInput();
      resetEmailInput();
      
  }

  
  const formClass = inputHasError ? 'form-control invalid' : 'form-control';

  const emailInputClass = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={formClass}>
        <label htmlFor='name'>Your Name</label>
        <input 
        // ref = {inputRef} 
        type='text' 
        id='name' 
        onChange={nameChangeHandler} 
        value={enteredName} 
        onBlur={nameBlurHandler}
        />
      </div>
      <div className={emailInputClass}>
        {inputHasError && <p className="error-text">Enter valid input value</p>}

        <label htmlFor='name'>Your Mail</label>
        <input 
        // ref = {inputRef} 
        type='email' 
        id='mail' 
        onChange={emailChangeHandler} 
        value={enteredEmailVal} 
        onBlur={emailBlurHandler}
        />

        {emailHasError && <p className="error-text">Enter valid email address</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
