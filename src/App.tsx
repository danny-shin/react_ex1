import './App.css';
import {Card, CardContent} from "@/components/ui/card"
// import App248 from './248_useMemo/App248';
// import App243 from './243_memo/App243';
import App278 from './278_cross_comps/App278.jsx';
// declare const App278: React.FC;

function App() {

  return (
    <Card className='mx-auto max-w-lg mt-10'>
      <CardContent>
        <App278 />
      </CardContent>
    </Card>
  );
}

export default App;