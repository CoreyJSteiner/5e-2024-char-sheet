import type { CharSheetKey } from '../../schema/CharSheetTypes'
import { useCharSheetContext } from '../CharSheetContext'
import SingleStat from '../SingleStat'

type TopStatProps = {
    className?: string
    fieldName: CharSheetKey
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
}

const TopStat: React.FC<TopStatProps> = ({ className, fieldName, inputMode }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    const coinValue = charSheet ? charSheet[fieldName] : ''

    return (
        <SingleStat
            className={className}
            fieldName={fieldName}
            value={coinValue ? coinValue.toString() : ''}
            onUpdate={
                (newValue) => updateCharSheet({ ...charSheet, [fieldName]: newValue })
            }
            inputMode={inputMode}
        />
    )
}

export default TopStat