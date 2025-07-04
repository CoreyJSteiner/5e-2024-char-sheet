import './StatSkills.css'
import { useCharSheetContext } from '../CharSheetContext'
import InputHeading from '../InputHeading'
import { type Skill, type StatTypes } from '../../schema/CharSheetTypes'
import { updateNestedValue } from '../Utils/Helpers'
import { useEffect, useState } from 'react'
import RadioToggle from '../RadioToggle/RadioToggle'

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

        console.log(skills);


        if (skills) setSkills(skills)
    }, [charSheet, statName])

    const updateStatField = (field: 'score' | 'modifier' | 'save') => (input: string) => {
        const updated = updateNestedValue(charSheet, ['stats', statName, field], input)
        updateCharSheet(updated)
    }

    const updateSkillFieldMod = (field: string) => (input: string) => {
        const updated = updateNestedValue(charSheet, ['stats', statName, 'skills', field, 'modifier'], input)
        console.log(updated);

        updateCharSheet(updated)
    }

    const updateSkillFieldProf = (field: string) => (profInput: boolean) => {
        const updated = updateNestedValue(charSheet, ['stats', statName, 'skills', field, 'proficient'], profInput)
        console.log(updated);

        updateCharSheet(updated)
    }

    return (
        <div className={`stat-container ${className}`}>
            <div className='stat-parent'>
                <p className='stat-section-label'>{statName}</p>
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
                    headingSize="h3"
                    onUpdate={updateStatField('save')}
                />

                {skills && (
                    Object.keys(skills).map((skill: string) => (
                        <div key={crypto.randomUUID()} className='stat-skill-container'>
                            <RadioToggle
                                value={skills[skill].proficient}
                                emphasis={skills[skill].expertise}
                                useEmphasis={false}
                                onUpdate={updateSkillFieldProf(skill)}
                            />
                            <InputHeading
                                className='stat-skill'
                                propTextValue={skills[skill].modifier}
                                headingSize="h3"
                                onUpdate={updateSkillFieldMod(skill)}
                            />
                            <p className="stat-skill-label">{skill}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default StatSkills