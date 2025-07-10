import InputHeading from '../InputHeading'
import './SingleStat.css'

type SingleStatProps = {
    className?: string
    fieldName?: string
    value?: string | number | null
    inputMode: React.HTMLAttributes<HTMLInputElement>['inputMode']
    onUpdate: (newValue: string) => void
}

const SingleStat: React.FC<SingleStatProps> = ({ className, fieldName, value, inputMode, onUpdate }) => {
    return (
        <div className={`single-stat ${className}`}>
            <p className='single-stat-label'>{fieldName}</p>
            <InputHeading
                className='single-stat-value'
                propTextValue={value ? value.toString() : ''}
                headingSize="h1"
                onUpdate={onUpdate}
                inputMode={inputMode}
            />
        </div>
    )
}

export default SingleStat