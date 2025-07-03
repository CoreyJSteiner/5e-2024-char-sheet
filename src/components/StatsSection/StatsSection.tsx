import SingleStat from '../SingleStat'
import StatSkills from '../StatSkills'
import './StatsSection.css'

type StatsSectionProps = {
    id: string
}

const StatsSection: React.FC<StatsSectionProps> = ({ id }) => {
    return (
        <div id={id} className='stat-section' >
            <div className='stat-section-col'>
                <SingleStat className='stat-section-parent' fieldName='proficiency' />
                <StatSkills className='stat-section-parent' statName='STR' />
                <StatSkills className='stat-section-parent' statName='DEX' />
                <StatSkills className='stat-section-parent' statName='CON' />
                <SingleStat className='stat-section-parent' fieldName='heroicInsp' />
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