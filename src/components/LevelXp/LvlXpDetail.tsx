import './LvlXpDetail.css'
import InputHeading
    from '../InputHeading'
import { useCharSheetContext } from '../CharSheetContext'


const LvlXpDetail: React.FC = () => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    return (
        <div className='lvl-xp-container'>
            <InputHeading
                className='lvl-heading'
                propTextValue={charSheet.level}
                headingSize="h3"
                inputMode='numeric'
                onUpdate={(newValue) => updateCharSheet({ level: parseInt(newValue) })}
            />
            <InputHeading
                className='xp-heading'
                propTextValue={charSheet.xp}
                headingSize="h3"
                inputMode='numeric'
                onUpdate={(newValue) => updateCharSheet({ xp: parseInt(newValue) })}
            />
        </div>
    )
}

export default LvlXpDetail