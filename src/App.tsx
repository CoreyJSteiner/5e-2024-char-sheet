import './App.css'
import TopDetail from './components/TopDetail'
import TabMain from './components/TabMain'
import TabSpells from './components/TabSpells'
import { TabController, Tab } from './components/TabController'
import Settings from './components/Settings/Settings'
import { CharSheetContext } from './components/CharSheetContext'
import type { CharSheet } from './schema/CharSheetTypes'
import { useState } from 'react'

function App() {
  const [charSheet, setCharSheet] = useState<CharSheet>({
    name: 'Atasha Gagarin-Braun',
    background: 'Entertainer',
    class: 'Warlock',
    species: 'Human',
    subclass: 'Hexblade',
    level: 5,
    ac: 16,
    maxHp: 39,
    currentHp: 35,
    maxHitDice: 5,
    sidesHitDice: 8,
    currentHitDice: 5,
    stats: {
      'STR': {
        score: 8
      }
    }
  })

  const updateCharSheet = (updates: Partial<CharSheet>) => {
    setCharSheet(prev => ({ ...prev, ...updates }))
    console.dir(charSheet)
  }

  return (
    <CharSheetContext.Provider value={{ charSheet, updateCharSheet }}>
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
    </CharSheetContext.Provider>

  )
}

export default App
