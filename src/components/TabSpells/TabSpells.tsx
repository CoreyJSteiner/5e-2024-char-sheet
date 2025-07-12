import { useCharSheetContext } from '../CharSheetContext'
import CoinSection from '../CoinSection'
import GenericTextArea from '../GenericTextArea'
import SpellcastingAbility from '../SpellcastingAbility/SpellcastingAbility'
import SpellList from '../SpellList/SpellList'
import SpellSlots from '../SpellSlots'
import './TabSpells.css'

const TabSpells: React.FC = () => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    return (
        <div className="tab-spell-grid">
            <SpellcastingAbility id='spell-abil' className='item' />
            <SpellSlots id='slots' className='item' />
            <SpellList id='spell-list' className='item' />
            <div id='appear' className='item'>
                <p style={{ padding: '0', margin: '0' }}>Appearance</p>
                <GenericTextArea
                    propTextValue={charSheet.appearance}
                    onUpdate={newValue => updateCharSheet({ appearance: newValue })
                    }
                />
            </div>
            <div id='story' className='item'>
                <p style={{ padding: '0', margin: '0' }}>Backstory & Personality</p>
                <GenericTextArea
                    propTextValue={charSheet.backstoryPersonality}
                    onUpdate={newValue => updateCharSheet({ backstoryPersonality: newValue })
                    }
                />            </div>
            <div id='lang' className='item'>
                <p style={{ padding: '0', margin: '0' }}>Languages</p>
                <GenericTextArea
                    propTextValue={charSheet.languages}
                    onUpdate={newValue => updateCharSheet({ languages: newValue })
                    }
                />            </div>
            <div id='gear' className='item'>
                <p style={{ padding: '0', margin: '0' }}>Equipment</p>
                <GenericTextArea
                    propTextValue={charSheet.equipment}
                    onUpdate={newValue => updateCharSheet({ equipment: newValue })
                    }
                />            </div>
            <CoinSection id='coin' className='item' />
        </div >
    )
}

export default TabSpells