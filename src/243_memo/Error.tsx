import { memo } from 'react';
import { Button } from '@/components/ui/button';

function Error({ message, onClearError }:
  { message: string, onClearError: () => void }) {
  console.log('<Error /> component function is executed.');
  if (!message) {
    return null;
  }

  // return <p className={'text-red-600'}>{message}</p>;
  return (
    <div className='mb-4'>
      <p className={'text-red-600 mb-2'}>{message}</p>
      <Button className='text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700'
        onClick={onClearError}
      >X </Button>
    </div> 
  ) 
}

// export default Error;
// Use the following line instead, to avoid unnecessary component evaluation
export default memo(Error);