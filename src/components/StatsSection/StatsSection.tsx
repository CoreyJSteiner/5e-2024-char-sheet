import InputHeading from '../InputHeading'
import StatSkills from '../StatSkills'
import './StatsSection.css'

type StatsSectionProps = {
    id: string
}

const StatsSection: React.FC<StatsSectionProps> = ({ id }) => {
    return (
        <div id={id} className='stat-section-grid'>
            <div className='stat-section-parent'>
                <p>PROF</p>
                <InputHeading className='stat-section-mod' propTextValue='+3' headingSize="h1" />
            </div>
            <div className='stat-section-parent'>
                <p>INT</p>
                <InputHeading className='stat-section-mod' propTextValue='+0' headingSize="h1" />
                <InputHeading className='stat-section-score' propTextValue='10' headingSize="h1" />
            </div>
            {/* <div className='stat-section-parent'>
                <p>STR</p>
                <InputHeading className='stat-section-mod' propTextValue='-1' headingSize="h1" />
                <InputHeading className='stat-section-score' propTextValue='8' headingSize="h1" />
            </div> */}
            <StatSkills statName='STR' />
            <div className='stat-section-parent'>
                <p>WIS</p>
                <InputHeading className='stat-section-mod' propTextValue='-1' headingSize="h1" />
                <InputHeading className='stat-section-score' propTextValue='8' headingSize="h1" />
            </div>
            <div className='stat-section-parent'>
                <p>DEX</p>
                <InputHeading className='stat-section-mod' propTextValue='+3' headingSize="h1" />
                <InputHeading className='stat-section-score' propTextValue='16' headingSize="h1" />
            </div>
            <div className='stat-section-parent'>
                <p>CHA</p>
                <InputHeading className='stat-section-mod' propTextValue='+4' headingSize="h1" />
                <InputHeading className='stat-section-score' propTextValue='18' headingSize="h1" />
            </div>
            <div className='stat-section-parent'>
                <p>CON</p>
                <InputHeading className='stat-section-mod' propTextValue='+2' headingSize="h1" />
                <InputHeading className='stat-section-score' propTextValue='14' headingSize="h1" />
            </div>
            <div className='stat-section-parent'>
                <p>INSP</p>
                <InputHeading className='stat-section-mod' propTextValue='☑️' headingSize="h1" />
            </div>
        </div>
    )
}

export default StatsSection