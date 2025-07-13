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
    "proficiency": +3,
    "heroicInsp": 1,
    "initiative": +3,
    "speed": 30,
    "size": "med",
    "passivePerception": 9,
    "weaponsAndDamage": [
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Whip', atkBonusOrDc: "+7", damageAndType: "1d4 + 4 SLSH", notes: "Swap DMG-TYPE for NEC || RAD || PSY, 10ft Reach" },
      { name: 'Eldritch Blast' },
      { name: 'Unarmed Strike' }
    ],
    "spellSlots": {
      "1": {
        "maxSlots": 2,
        "spentSlots": 1,
        "slotLevel": 1
      },
      "2": {
        "slotLevel": 2,
        "maxSlots": 4,
        "spentSlots": 3
      },
      "3": {
        "slotLevel": 3,
        "maxSlots": 2,
        "spentSlots": 0
      },
      "4": {
        "slotLevel": 4,
        "maxSlots": 3,
        "spentSlots": 2
      },
      "5": {
        "slotLevel": 5,
        "maxSlots": 0,
        "spentSlots": 0
      },
      "7": {
        "slotLevel": 7,
        "maxSlots": 4,
        "spentSlots": 2
      }
    },
    "spellList": [
      {
        spellLevel: 0,
        name: 'Eldritch Blast',
        castingTime: '1A',
        range: '120ft',
        notes: 'V/S',
        concentrationReq: false,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 0,
        name: 'Toll of the Dead',
        castingTime: '1A',
        range: '60ft',
        notes: 'V/S',
        concentrationReq: false,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 0,
        name: 'Minor Illusion',
        castingTime: '1A',
        range: '30ft',
        notes: 'S/M, 5ft Cube',
        concentrationReq: false,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Mage Armor',
        castingTime: '1A',
        range: 'Touch',
        notes: 'V/S/M, 8hr',
        concentrationReq: false,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Arms of Hadar',
        castingTime: '1A',
        range: 'Self',
        notes: 'V/S, 10ft Sphere',
        concentrationReq: false,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
      {
        spellLevel: 1,
        name: 'Hex',
        castingTime: '1BA',
        range: '90ft',
        notes: 'V/S/m, 1hr',
        concentrationReq: true,
        materialReq: false,
        ritualAllow: false
      },
    ],
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
    },
    classFeatures: [
      {
        maxUses: 5,
        body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      },
      {
        title: 'Lorem 2',
        maxUses: 3,
        reset: 'LR',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        maxUses: 2,
        currentUses: 1,
        reset: 'SR',
        body: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'
      },
      {
        title: 'Lorem 4',
        heading: 'heading',
        body: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
      }
    ]
  }
  )

  const updateCharSheet = (updates: Partial<CharSheet>) => {
    setCharSheet(prev => ({ ...prev, ...updates }))
    console.log('--update--')

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
