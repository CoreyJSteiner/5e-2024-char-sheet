import ExtraDetail from '../ExtraDetail'
import StatsSection from '../StatsSection'
import './TabMain.css'

const TabMain: React.FC = () => {
    return (
        <div className="tab-main-grid">
            <StatsSection id='stats' />
            {/* <div id='stats' className='item'>stats</div> */}
            <div id='equip' className='item'>equip</div>
            {/* <div id='extra-deet' className='item'>extra</div> */}
            <ExtraDetail id='extra-deet' />
            <div id='weapon' className='item'>weapon</div>
            <div id='class-feat' className='item'>class feat</div>
            <div id='feat' className='item'>feat</div>
        </div >
    )
}

export default TabMain