import { useCallback, useMemo } from 'react';

type Item = {
	id: number;	
	title: string;
};

function sortItems(items:Item[]) {
  console.log('Sorting1');
  return items.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    } else if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
}

function List({ items, maxNumber }:{items: Item[]; maxNumber: number}) {
	// will execute whenever the component function is invoked
  // const sortedItems = sortItems(items); 

  // Use the code below (and remove the sortItems() function above, as well as line 16, to optimize the code)
  const sortedItems2 = useMemo(
    function () {
      console.log('Sorting2');
      return items.sort((a, b)=>(a.id-b.id));
    },
    [items]
  );

	const sortedItems3 = useCallback(
		() => {
			console.log('Sorting3');
			return items.sort((a, b)=>(a.id-b.id));
		}
	, [items]); // will only execute when the items prop changes

  const listItems = sortedItems2.slice(0, maxNumber);
	//const listItems = sortedItems3().slice(0, maxNumber);

  return (
    <ul>
      {listItems.map((item) => (
        <li key={item.id}>
          {item.title} (ID: {item.id})
        </li>
      ))}
    </ul>
  );
}

export default List;