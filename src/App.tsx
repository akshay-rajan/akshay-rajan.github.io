import './styles/main.scss'
import Left from './components/Left'
import Right from './components/Right'
import { ActiveSectionProvider } from './context/ActiveSectionContext'


function App() {

  return (
    <ActiveSectionProvider>
      <div className="resume-container">
        <Left />
        <Right />
      </div>
    </ActiveSectionProvider>
  )
}

export default App
