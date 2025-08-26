import { useState } from 'react';
import List from './List';
import { Input } from '@/components/ui/input';

const DUMMY_ITEMS = [
  { id: 5, title: 'A Book' },
  { id: 53, title: 'A Video Game'},
  { id: 1, title: 'A Carpet'},
  { id: 10, title: 'A Movie'},
  { id: 4, title: 'A Shirt'},
];

function App248() {
  const [maxNumberOfItems, setMaxNumberOfItems] = useState(3);

	interface HandleUpdateMaxNumEvent extends React.ChangeEvent<HTMLInputElement> {}

	function handleUpdateMaxNum(event: HandleUpdateMaxNumEvent): void {
		setMaxNumberOfItems(Number(event.target.value));
	}

  return (
    <>
      <div>
        <label  htmlFor="max">Max. number of items</label>
        <Input
          type="number"
          id="max"
          onChange={handleUpdateMaxNum}
          value={maxNumberOfItems}
        />
      </div>
      <List items={DUMMY_ITEMS} maxNumber={maxNumberOfItems} />
    </>
  );
}

export default App248;