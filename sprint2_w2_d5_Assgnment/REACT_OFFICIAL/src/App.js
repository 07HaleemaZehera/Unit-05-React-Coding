
import './App.css';
import { Button } from './components/Button';




function App() {
  return (
    
<div className='App'>
  

<Button className='A' name="Primary Button"  variant="outline">
  Primary Button
</Button>


  
<Button className='B' >
Default Button
</Button>

<Button className='C' >
 Dashed Button
</Button>
<br></br>
<Button className='Simple'>Text Button</Button>
<Button className='Simple1'>Link Button</Button>
{/* <div> */}
  {/* <FancyButton>Fancy Button</FancyButton> */}
{/* </div> */}
</div>

    
  );
}
export default App;
