import SpellList from '../SpellList/SpellList'
import './TabSpells.css'

const TabSpells: React.FC = () => {
    return (
        <div className="tab-spell-grid">
            <div id='spell-abil' className='item'>spell-abil</div>
            <div id='slots' className='item'>slots</div>
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