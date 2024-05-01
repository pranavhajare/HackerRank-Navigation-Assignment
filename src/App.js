
import Navigation from './Component/Navigation';
import {  locations } from './Constant/Data';
function App() {
  return (
    <div>
      <Navigation data={locations}/>
    </div>
  );
}

export default App;
