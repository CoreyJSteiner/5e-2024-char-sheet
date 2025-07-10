import type { CoinType } from '../../schema/CharSheetTypes'
import { useCharSheetContext } from '../CharSheetContext'
import SingleStat from '../SingleStat'

type CoinStatProps = {
    className?: string
    coinField: CoinType
}

const CoinStat: React.FC<CoinStatProps> = ({ className, coinField }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    const coinValue = charSheet.coin ? charSheet.coin[coinField] : ''

    return (
        <div className={className}>
            <SingleStat
                fieldName={coinField}
                value={coinValue ? coinValue.toString() : ''}
                onUpdate={
                    (newValue) => updateCharSheet({ coin: { ...charSheet.coin, [coinField]: newValue } })
                }
                inputMode='numeric'
            />
        </div>
    )
}

export default CoinStat