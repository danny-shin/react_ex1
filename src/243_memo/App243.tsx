import { useCallback, useState, useMemo, type SetStateAction } from 'react';
import Error from './Error';
import {Button} from '@/components/ui/button';
import { Input } from '@/components/ui/input';

function App243() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>();

  function handleUpdateEmail(event: { target: { value: SetStateAction<string>; }; }) {
    setEnteredEmail(event.target.value);
  }

  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    if (!enteredEmail.endsWith('.com')) {
      setErrorMessage('Email must end with .com.');
    }
  }

  function handleClearError0() {
    console.log('handleClearError0 function is executed.');
    setErrorMessage('');
  }
  const handleClearError1 = useCallback(
    () => {
      console.log('handleClearError1 function is executed.');
      setErrorMessage('')
    }
  , []);

  // same as handleClearError1, but using useMemo
  const handleClearError = useMemo(
    () => {
      return () => {
        console.log('handleClearError2 function is executed.');
        setErrorMessage('');
      };
    },
    []
  );


  return (
    <form className={'flex flex-col gap-2'} onSubmit={handleSubmit}>
      <div className={`flex flex-col gap-1 mb-4`}>
        <label htmlFor="email" className='text-xl mb-4'>Email</label>
        {/* <input className='border border-gray-300 rounded-md p-2'
          id="email"
          type="email"
          value={enteredEmail}
          onChange={handleUpdateEmail}
        /> */}
        <Input className='text-lg'
          id="email1"
          type="email"
          value={enteredEmail}
          onChange={handleUpdateEmail}
        />
      </div>
      <Error message={errorMessage||''} onClearError={handleClearError} />
      <Button>Sign Up</Button>
    </form>
  );
}

export default App243;