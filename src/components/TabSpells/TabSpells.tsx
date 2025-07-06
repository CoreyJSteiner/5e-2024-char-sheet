import SpellcastingAbility from '../SpellcastingAbility/SpellcastingAbility'
import SpellList from '../SpellList/SpellList'
import SpellSlots from '../SpellSlots'
import './TabSpells.css'

const TabSpells: React.FC = () => {
    return (
        <div className="tab-spell-grid">
            {/* <div id='spell-abil' className='item'>spell-abil</div> */}
            <SpellcastingAbility id='spell-abil' className='item' />
            {/* <div id='slots' className='item'>slots</div> */}
            <SpellSlots id='slots' className='item' />
            {/* <div id='spell-list' className='item'>spell-list</div> */}
            <SpellList id='spell-list' className='item' />
            <div id='appear' className='item'>appear</div>
            <div id='story' className='item'>story</div>
            <div id='lang' className='item'>lang</div>
            <div id='gear' className='item'>gear</div>
            <div id='coin' className='item'>coin</div>
        </div >
    )
}

export default TabSpells