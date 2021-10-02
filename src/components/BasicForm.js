import useInputReducer from '../hooks/use-input-reducer';
const BasicForm = (props) => {

  const { 
    value: enteredFirstName,
    isValid:enteredFirstNameIsValid,
    hasError:firstNameHasError,
    valueChangeHandler:firstNameChangeHandler,
    inputBlurHandler:firstNameBlurHandler,reset:resetFirstNameInput
    } = useInputReducer(value=>value.trim()!=='');

  const { value: enteredLastName,
      isValid:enteredLastNameIsValid,
      hasError:lastNameHasError,
      valueChangeHandler:LastNameChangeHandler,
      inputBlurHandler:LastNameBlurHandler,reset:resetLastNameInput
    } = useInputReducer(value=>value.trim()!=='');

  const { value:enteredEmailVal,
    isValid:enteredEmailIsValid,
    hasError:emailHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput
    } = useInputReducer(value=>value.includes('@'));

    let formIsValid = false;
    if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid){
      formIsValid = true;
    }

    const onSubmitHandler = (event) =>{
      event.preventDefault();
      if(!formIsValid){
        return;
      }
      resetFirstNameInput();
      resetLastNameInput();
      resetEmailInput();
    }

    const formFirstNameClass = firstNameHasError ? 'form-control invalid' : 'form-control';
    const formLastNameClass = lastNameHasError ? 'form-control invalid' : 'form-control';
    const formEmailClass = emailHasError ? 'form-control invalid' : 'form-control';
    
  return (
    <form onSubmit = {onSubmitHandler}>
      <div className='control-group'>
        <div className={formFirstNameClass}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          value={enteredFirstName} 
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Enter valid First Name value</p>}
        </div>
        <div className={formLastNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name' 
          value={enteredLastName}
          onChange={LastNameChangeHandler}
          onBlur={LastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Enter valid Last Name value</p>}
        </div>
      
      <div className={formEmailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='mail' 
        id='name' 
        value={enteredEmailVal}
        onChange={emailChangeHandler}
        onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Enter valid email value</p>}
      </div>
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
