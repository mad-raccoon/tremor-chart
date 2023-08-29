import './App.css'
import StackedBarChart from './StackedBarChart'


function App() {

  return (
    <>
        <StackedBarChart theme={'tremor'} />
        <StackedBarChart theme={'scalapay'} />
        <StackedBarChart theme={'softools'} />
    </>
  )
}

export default App
