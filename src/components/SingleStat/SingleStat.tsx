import InputHeading from '../InputHeading'
import './SingleStat.css'
import { useCharSheetContext } from '../CharSheetContext'
import type { CharSheetKey } from '../../schema/CharSheetTypes'

type SingleStatProps = {
    className?: string
    fieldName: CharSheetKey
}

const SingleStat: React.FC<SingleStatProps> = ({ className, fieldName }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    return (
        <div className={`single-stat-parent ${className}`}>
            <p className='single-stat-label'>{fieldName}</p>
            <InputHeading
                className='single-stat-value'
                propTextValue={charSheet[fieldName]?.toString()}
                headingSize="h1"
                onUpdate={(newValue) => updateCharSheet({ [fieldName]: newValue })}
            />
        </div>
    )
}

export default SingleStat