import InputHeading from '../InputHeading'
import StatSkills from '../StatSkills'
import './StatsSection.css'

type StatsSectionProps = {
    id: string
}

const StatsSection: React.FC<StatsSectionProps> = ({ id }) => {
    return (
        <div id={id} className='stat-section' >
            <div id={id} className='stat-section-col'>
                <div className='stat-section-parent'>
                    <p className='stat-section-label'>PROF</p>
                    <InputHeading className='stat-section-value' propTextValue='+3' headingSize="h1" />
                </div>
                <StatSkills className='stat-section-parent' statName='STR' />
                <StatSkills className='stat-section-parent' statName='DEX' />
                <StatSkills className='stat-section-parent' statName='CON' />
                <div className='stat-section-parent'>
                    <p className='stat-section-label'>INSP</p>
                    <InputHeading className='stat-section-value' propTextValue='☑️' headingSize="h1" />
                </div>
            </div>
            <div id={id} className='stat-section-col'>
                <StatSkills className='stat-section-parent' statName='INT' />
                <StatSkills className='stat-section-parent' statName='WIS' />
                <StatSkills className='stat-section-parent' statName='CHA' />
            </div>
        </div>
    )
}

export default StatsSection