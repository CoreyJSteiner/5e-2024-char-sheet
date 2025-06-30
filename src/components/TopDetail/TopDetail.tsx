import './TopDetail.css'
import LvlXpDetail from "../LevelXp"
import NameClassSpeciesDetail from "../NameClassSpeciesDetail"
import AcDetail from '../AC'
import Vitality from '../Vitality'

const TopDetail: React.FC = () => {
    return (
        <div className="top-detail-container">
            <NameClassSpeciesDetail />
            <LvlXpDetail />
            <AcDetail />
            <Vitality />
        </div >
    )
}

export default TopDetail