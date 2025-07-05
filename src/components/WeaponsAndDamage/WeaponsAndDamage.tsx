import { useCharSheetContext } from '../CharSheetContext'
import InputHeading from '../InputHeading'
import { updateNestedValue } from '../Utils/Helpers'
import './WeaponsAndDamage.css'

type WeaponsAndDamageProps = {
    id?: string
    className?: string
}

const WeaponsAndDamage: React.FC<WeaponsAndDamageProps> = ({ id, className }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    const updateDamageField = (field: string, idx: number) => (input: string) => {
        const updated = updateNestedValue(charSheet, ['weaponsAndDamage', idx, field], input)
        console.log(updated);

        updateCharSheet(updated)
    }

    return (
        <div id={id} className={`damage-section-container ${className}`}>
            <div className={`damage-section`}>
                {charSheet.weaponsAndDamage && (
                    charSheet.weaponsAndDamage.map((damageLine, idx) => (
                        <div key={idx} className='damage-line'>
                            <InputHeading
                                className='damage-line-name'
                                propTextValue={damageLine.name}
                                inputMode='text'
                                headingSize='h4'
                                onUpdate={updateDamageField('name', idx)}
                            />
                            <InputHeading
                                className='damage-line-atk-dc'
                                propTextValue={damageLine.atkBonusOrDc}
                                inputMode='text'
                                headingSize='h4'
                                onUpdate={updateDamageField('atkBonusOrDc', idx)}
                            />
                            <InputHeading
                                className='damage-line-dmg-type'
                                propTextValue={damageLine.damageAndType}
                                inputMode='text'
                                headingSize='h4'
                                onUpdate={updateDamageField('damageAndType', idx)}
                            />
                            <InputHeading
                                className='damage-line-notes'
                                propTextValue={damageLine.notes}
                                inputMode='text'
                                headingSize='h4'
                                onUpdate={updateDamageField('notes', idx)}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default WeaponsAndDamage