import './LvlXpDetail.css'
import InputHeading from '../InputHeading'

const LvlXpDetail: React.FC = () => {
    return (
        <div className='lvl-xp-container'>
            <InputHeading className='lvl-heading' propTextValue="Lvl:1" headingSize="h3" />
            <InputHeading className='xp-heading' propTextValue="XP: 0" headingSize="h3" />
        </div>
    )
}

export default LvlXpDetail