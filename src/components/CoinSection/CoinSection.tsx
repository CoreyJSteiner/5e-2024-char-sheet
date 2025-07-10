import './CoinSection.css'
import CoinStat from '../CoinStat'

type CoinSectionProps = {
    id?: string
    className?: string
}

const CoinSection: React.FC<CoinSectionProps> = ({ id, className }) => {
    return (
        <div id={id} className={`coin-section-container ${className}`}>
            <CoinStat coinField='cp' />
            <CoinStat coinField='sp' />
            <CoinStat coinField='gp' />
            <CoinStat coinField='ep' />
            <CoinStat coinField='pp' />
        </div>
    )
}

export default CoinSection