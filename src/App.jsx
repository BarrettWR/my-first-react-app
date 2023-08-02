import { useState } from 'react'
import './styles/App.css'
import Info from './components/Info'
import Education from './components/Education'
import Experience from './components/Experience'
import CV from './components/CV'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='parent'>
      <div>
        <Info />
        <Education />
        <Experience />
        <Button />
      </div>

      <div>
        <CV />
      </div>
    </div>
  );
};

export default App
