import './StatSkills.css'
import { useCharSheetContext } from '../CharSheetContext'
import InputHeading from '../InputHeading'
import { type Skill, type StatTypes } from '../../schema/CharSheetTypes'
import { updateNestedValue } from '../Utils/Helpers'
import { useEffect, useState } from 'react'

type StatSkillsProps = {
    className?: string
    statName: StatTypes
}

const StatSkills: React.FC<StatSkillsProps> = ({ className, statName }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()
    const [skills, setSkills] = useState<Record<string, Skill>>({})

    useEffect(() => {
        const stats = charSheet.stats ? charSheet.stats[statName] : null
        const skills = stats ? stats.skills : null

        if (skills) setSkills(skills)
    }, [charSheet, statName])

    const updateStatField = (field: 'score' | 'modifier' | 'save') => (input: string) => {
        const updated = updateNestedValue(charSheet, ['stats', statName, field], input)
        updateCharSheet(updated)
    }

    const updateSkillField = (field: string) => (input: string) => {
        const updated = updateNestedValue(charSheet, ['stats', statName, 'skills', field], input)
        updateCharSheet(updated)
    }

    return (
        <div className={`stat-container ${className}`}>
            <div className='stat-parent'>
                <p>{statName}</p>
                <div className='stat-main'>
                    <InputHeading
                        className='stat-mod'
                        propTextValue={charSheet.stats ? charSheet.stats[statName]?.modifier : ''}
                        headingSize="h1"
                        onUpdate={updateStatField('modifier')}
                    />
                    <InputHeading
                        className='stat-score'
                        propTextValue={charSheet.stats ? charSheet.stats[statName]?.score : ''}
                        headingSize="h1"
                        onUpdate={updateStatField('score')}
                    />
                </div>
                <InputHeading
                    className='stat-save'
                    propTextValue={charSheet.stats ? charSheet.stats[statName]?.save : ''}
                    headingSize="h4"
                    onUpdate={updateStatField('save')}
                />

                {skills && (
                    Object.keys(skills).map((skill: string) => (
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p style={{ padding: 0, margin: 0, width: '14em' }}>{skill}</p>
                            <InputHeading
                                className='stat-skill'
                                propTextValue={skills[skill].modifier}
                                headingSize="h4"
                                onUpdate={updateSkillField(skill)}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default StatSkills