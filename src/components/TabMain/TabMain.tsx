import './TabMain.css'
import EquipmentProfs from '../EquipmentProfs'
import ExtraDetail from '../ExtraDetail'
import StatsSection from '../StatsSection'
import WeaponsAndDamage from '../WeaponsAndDamage'
import FeatureColumn from '../FeatureColumn'


const TabMain: React.FC = () => {
    return (
        <div className="tab-main-grid">
            <StatsSection id='stats' />
            <EquipmentProfs id='equip' className='item' />
            <ExtraDetail id='extra-deet' />
            <WeaponsAndDamage id='weapon' className='item' />
            <div id='class-feat' className='item'>class feat</div>
            <FeatureColumn id='class-feat' featureType={'classFeatures'} className='item' />
            <div id='feat' className='item'>feat</div>
        </div >
    )
}

export default TabMain