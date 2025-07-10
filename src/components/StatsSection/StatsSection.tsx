import StatSkills from '../StatSkills'
import TopStat from '../TopStat'
import './StatsSection.css'

type StatsSectionProps = {
    id: string
}

const StatsSection: React.FC<StatsSectionProps> = ({ id }) => {
    return (
        <div id={id} className='stat-section' >
            <div className='stat-section-col'>
                <TopStat className='stat-section-parent' fieldName='proficiency' inputMode='numeric' />
                <StatSkills className='stat-section-parent' statName='STR' />
                <StatSkills className='stat-section-parent' statName='DEX' />
                <StatSkills className='stat-section-parent' statName='CON' />
                <TopStat className='stat-section-parent' fieldName='heroicInsp' inputMode='numeric' />
            </div>
            <div className='stat-section-col'>
                <StatSkills className='stat-section-parent' statName='INT' />
                <StatSkills className='stat-section-parent' statName='WIS' />
                <StatSkills className='stat-section-parent' statName='CHA' />
            </div>
        </div>
    )
}

export default StatsSection