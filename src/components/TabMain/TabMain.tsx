import './TabMain.css'
import EquipmentProfs from '../EquipmentProfs'
import ExtraDetail from '../ExtraDetail'
import StatsSection from '../StatsSection'
import WeaponsAndDamage from '../WeaponsAndDamage'


const TabMain: React.FC = () => {
    return (
        <div className="tab-main-grid">
            <StatsSection id='stats' />
            {/* <div id='stats' className='item'>stats</div> */}
            {/* <div id='equip' className='item'>equip</div> */}
            <EquipmentProfs id='equip' className='item' />
            {/* <div id='extra-deet' className='item'>extra</div> */}
            <ExtraDetail id='extra-deet' />
            {/* <div id='weapon' className='item'>weapon</div> */}
            <WeaponsAndDamage id='weapon' className='item' />
            <div id='class-feat' className='item'>class feat</div>
            <div id='feat' className='item'>feat</div>
        </div >
    )
}

export default TabMain