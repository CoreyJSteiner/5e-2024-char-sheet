import './AcDetail.css'
import InputHeading from '../InputHeading'
import { useCharSheetContext } from '../CharSheetContext'

const AcDetail: React.FC = () => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    return (
        <div className='ac-container'>
            <InputHeading
                className='ac-heading'
                propTextValue={charSheet.ac}
                headingSize="h1"
                onUpdate={(newValue) => updateCharSheet({ ac: parseInt(newValue) })}
                inputMode='numeric'
            />
        </div>
    )
}

export default AcDetail