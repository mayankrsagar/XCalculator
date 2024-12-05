import { useState } from 'react';

import Calculator from './components/Calculator/Calculator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculator />
    </>
  )
}

export default App
