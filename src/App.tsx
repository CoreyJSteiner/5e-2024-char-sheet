// import {  } from 'react'
import './App.css'
import TopDetail from './components/TopDetail'
import TabMain from './components/TabMain'
import TabSpells from './components/TabSpells'
import { TabController, Tab } from './components/TabController'

function App() {

  return (
    <>
      <div>
        <TopDetail />
        {/* -LINE- */}
        <TabController>
          <Tab label="Main">
            <TabMain />
          </Tab>
          <Tab label="Spells">
            <TabSpells />
          </Tab>
        </TabController>

        {/* Tab Main:
        - Attr/Skill
        - Extra Details
        - Damage Dealing
        - Class Features
        - Speacies Trais
        - Feats
        - Kit and Prof
        */}

        {/* {Tab 2:
        - Spellcasting Mods
        - Spell Slots
        - Spell List
        - Appearanc
        - Background, Personality, Alignment
        - Languages
        - Equiptment
        - Coin
         } */}
      </div>
    </>
  )
}

export default App
