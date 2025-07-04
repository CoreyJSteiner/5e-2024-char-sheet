import { useCharSheetContext } from '../CharSheetContext'
import InputHeading from '../InputHeading'
import './Vitality.css'

const Vitality: React.FC = () => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    return (
        <div className='vitality-grid'>
            <InputHeading
                className='vitality-main'
                propTextValue={charSheet.currentHp}
                headingSize="h3"
                inputMode='numeric'
                onUpdate={(newValue) => updateCharSheet({ currentHp: parseInt(newValue) })}
            />
            <InputHeading
                className='vitality-sub'
                propTextValue={charSheet.tempHp}
                headingSize="h4"
                inputMode='numeric'
                onUpdate={(newValue) => updateCharSheet({ tempHp: parseInt(newValue) })}
            />
            <InputHeading
                className='vitality-sub'
                propTextValue={charSheet.maxHp}
                headingSize="h4"
                inputMode='numeric'
                onUpdate={(newValue) => updateCharSheet({ maxHp: parseInt(newValue) })}
            />
            <InputHeading
                className='vitality-sub'
                propTextValue={charSheet.currentHitDice}
                headingSize="h4"
                inputMode='numeric'
                onUpdate={(newValue) => updateCharSheet({ currentHitDice: parseInt(newValue) })}
            />
            <InputHeading
                className='vitality-sub'
                propTextValue={charSheet.maxHitDice}
                headingSize="h4"
                inputMode='numeric'
                onUpdate={(newValue) => updateCharSheet({ maxHitDice: parseInt(newValue) })}
            />
            <InputHeading
                className='vitality-sub'
                propTextValue={charSheet.deathSaveFail}
                headingSize="h4"
                inputMode='numeric'
                onUpdate={(newValue) => updateCharSheet({ deathSaveFail: parseInt(newValue) })}
            />
            <InputHeading
                className='vitality-sub'
                propTextValue={charSheet.deathSaveSuccess}
                headingSize="h4"
                inputMode='numeric'
                onUpdate={(newValue) => updateCharSheet({ deathSaveSuccess: parseInt(newValue) })}
            />
        </div>
    )
}

export default Vitality