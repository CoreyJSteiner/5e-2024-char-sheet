import InputHeading from '../InputHeading'
import './SingleStat.css'
import { useCharSheetContext } from '../CharSheetContext'
import type { CharSheetKey } from '../../schema/CharSheetTypes'

type SingleStatProps = {
    className?: string
    fieldName: CharSheetKey
    inputMode: React.HTMLAttributes<HTMLInputElement>['inputMode']
}

const SingleStat: React.FC<SingleStatProps> = ({ className, fieldName, inputMode }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    return (
        <div className={`single-stat ${className}`}>
            <p className='single-stat-label'>{fieldName}</p>
            <InputHeading
                className='single-stat-value'
                propTextValue={charSheet[fieldName]?.toString()}
                headingSize="h1"
                onUpdate={(newValue) => updateCharSheet({ [fieldName]: newValue })}
                inputMode={inputMode}
            />
        </div>
    )
}

export default SingleStat