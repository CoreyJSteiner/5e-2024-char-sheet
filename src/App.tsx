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
    "name": "Atasha Gagarin-Braun",
    "background": "Entertainer",
    "class": "Warlock",
    "species": "Human",
    "subclass": "Hexblade",
    "level": 5,
    "ac": 16,
    "maxHp": 39,
    "currentHp": 35,
    "maxHitDice": 5,
    "sidesHitDice": 8,
    "currentHitDice": 5,
    "proficiency": +4,
    "heroicInsp": 1,
    "stats": {
      "STR": {
        "score": 8,
        "modifier": -1,
        "skills": {
          "athletics": {
            "modifier": -1
          }
        }
      },
      "WIS": {
        "score": 8,
        "modifier": -1,
        "save": 2,
        "skills": {
          "animal handling": {
            "modifier": -1
          },
          "insight": {
            "modifier": -1
          },
          "medicine": {
            "modifier": -1
          },
          "perception": {
            "modifier": -1
          },
          "survival": {
            "modifier": -1
          }
        }
      },
      "DEX": {
        "score": 16,
        "modifier": 3,
        "save": 3,
        "skills": {
          "acrobatics": {
            "modifier": -1
          },
          "slight of hand": {
            "modifier": -1
          },
          "stealth": {
            "modifier": -1
          }
        }
      },
      "CHA": {
        "score": 18,
        "modifier": 4,
        "save": 7,
        "skills": {
          "deception": {
            "modifier": -1
          },
          "intimidation": {
            "modifier": -1
          },
          "performance": {
            "modifier": -1
          },
          "persuasion": {
            "modifier": -1
          }
        }
      },
      "CON": {
        "score": 14,
        "modifier": 2,
        "save": 2
      },
      "INT": {
        "modifier": 0,
        "save": 0,
        "score": 10,
        "skills": {
          "arcana": {
            "modifier": -1
          },
          "history": {
            "modifier": -1
          },
          "investigation": {
            "modifier": -1
          },
          "nature": {
            "modifier": -1
          },
          "religion": {
            "modifier": -1
          }
        }
      }
    }
  }
  )

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
