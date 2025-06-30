import InputHeading from '../InputHeading'
import './NameClassSpeciesDetail.css'

const NameClassSpeciesDetail: React.FC = () => {
    return (
        <div className='name-class-species-grid'>
            <InputHeading
                className='name-class-species-main' propTextValue="Atasha Gagrin-Braun" headingSize="h1"
            />
            <InputHeading
                className='name-class-species-sub' propTextValue="Entertainer" headingSize="h2"
            />
            <InputHeading
                className='name-class-species-sub' propTextValue="Warlock" headingSize="h2"
            />
            <InputHeading
                className='name-class-species-sub' propTextValue="Human" headingSize="h2"
            />
            <InputHeading
                className='name-class-species-sub' propTextValue="Hexblade" headingSize="h2"
            />
        </div>
    )
}

export default NameClassSpeciesDetail