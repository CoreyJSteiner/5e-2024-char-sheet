import './App.css'
import TopDetail from './components/TopDetail'
import TabMain from './components/TabMain'
import TabSpells from './components/TabSpells'
import { TabController, Tab } from './components/TabController'
import Settings from './components/Settings/Settings'

function App() {

  return (
    <>
      <div className='app-container'>
        <TopDetail />
        <TabController>
          <Tab label="Main">
            <TabMain />
          </Tab>
          <Tab label="Spells">
            <TabSpells />
          </Tab>
        </TabController>
        <Settings />
      </div>
    </>
  )
}

export default App
