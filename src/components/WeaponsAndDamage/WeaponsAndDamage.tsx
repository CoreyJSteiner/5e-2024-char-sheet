import { useCharSheetContext } from '../CharSheetContext'
import InputHeading from '../InputHeading'
import './WeaponsAndDamage.css'

type WeaponsAndDamageProps = {
    id?: string
    className?: string
}

const WeaponsAndDamage: React.FC<WeaponsAndDamageProps> = ({ id, className }) => {
    const { charSheet } = useCharSheetContext()

    return (
        <div id={id} className={`damage-section ${className}`}>
            {charSheet.weaponsAndDamage && (
                charSheet.weaponsAndDamage.map(damageLine => (
                    <div className='damage-line'>
                        <InputHeading
                            className='damage-line-name'
                            propTextValue={damageLine.name}
                            inputMode='text'
                            headingSize='h4'
                            onUpdate={() => console.log('name')}
                        />
                        <InputHeading
                            className='damage-line-atk-dc'
                            propTextValue={damageLine.atkBonusOrDc}
                            inputMode='text'
                            headingSize='h4'
                            onUpdate={() => console.log('atkBonusOrDc')}
                        />
                        <InputHeading
                            className='damage-line-dmg-type'
                            propTextValue={damageLine.damageAndType}
                            inputMode='text'
                            headingSize='h4'
                            onUpdate={() => console.log('damageAndType')}
                        />
                        <InputHeading
                            className='damage-line-notes'
                            propTextValue={damageLine.notes}
                            inputMode='text'
                            headingSize='h4'
                            onUpdate={() => console.log('notes')}
                        />
                    </div>
                ))
            )}
        </div>
    )
}

export default WeaponsAndDamage