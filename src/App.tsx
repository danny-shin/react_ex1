import './App.css';
import {Card, CardContent} from "@/components/ui/card"
// import App248 from './248_useMemo/App248';
import App243 from './243_memo/App243';

function App() {

  return (
    <Card className='mx-auto max-w-lg mt-10'>
      <CardContent>
        <App243 />
      </CardContent>
    </Card>
  );
}

export default App;