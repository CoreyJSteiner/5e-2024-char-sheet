import './StatSkills.css'
import { useCharSheetContext } from '../CharSheetContext'
import InputHeading from '../InputHeading'
import { type StatTypes } from '../../schema/CharSheetTypes'
import { updateNestedValue } from '../Utils/Helpers'

type StatSkillsProps = {
    statName: StatTypes
}

const StatSkills: React.FC<StatSkillsProps> = ({ statName }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    const updateStatField = (field: 'value' | 'modifier') => (input: string) => {
        const updated = updateNestedValue(charSheet, ['stats', statName, field], input)
        updateCharSheet(updated)

    }

    return (
        <div className='stat-grid'>
            <div className='stat-parent'>
                <p>{statName}</p>
                <InputHeading
                    className='stat-score'
                    propTextValue={charSheet.stats ? charSheet.stats[statName]?.value : ''}
                    headingSize="h1"
                    onUpdate={updateStatField('value')}
                />
                <InputHeading
                    className='stat-mod'
                    propTextValue={charSheet.stats ? charSheet.stats[statName]?.modifier : ''}
                    headingSize="h1"
                    onUpdate={updateStatField('modifier')}
                />
                {/* <InputHeading className='stat-score' propTextValue={charSheet[statName]} headingSize="h2" /> */}
                {/* <InputHeading className='stat-save' propTextValue={charSheet[statName]} headingSize="h4" /> */}
                {/* <InputHeading className='stat-skill' propTextValue={charSheet[statName]} headingSize="h4" /> */}
            </div>
        </div>
    )
}

export default StatSkills