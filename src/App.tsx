import './styles/main.scss'
import Left from './components/Left'
import Right from './components/Right'
import { ActiveSectionProvider } from './context/ActiveSectionContext'
import { AnimationProvider } from './context/AnimationContext'


function App() {

  return (
    <AnimationProvider>
      <ActiveSectionProvider>
        <div className="resume-container">
          <Left />
          <Right />
        </div>
      </ActiveSectionProvider>
    </AnimationProvider>
  )
}

export default App
