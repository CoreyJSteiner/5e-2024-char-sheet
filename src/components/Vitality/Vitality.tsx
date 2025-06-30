import InputHeading from '../InputHeading'
import './Vitality.css'

const Vitality: React.FC = () => {
    return (
        <div className='vitality-grid'>
            <InputHeading
                className='vitality-main' propTextValue="26 HP" headingSize="h1"
            />
            <InputHeading
                className='vitality-sub' propTextValue="0 Temp" headingSize="h2"
            />
            <InputHeading
                className='vitality-sub' propTextValue="30 Max" headingSize="h2"
            />
            <InputHeading
                className='vitality-sub' propTextValue="4 Hit Dice" headingSize="h2"
            />
            <InputHeading
                className='vitality-sub' propTextValue="4 D8 Hit Dice" headingSize="h2"
            />
            <InputHeading
                className='vitality-sub' propTextValue="0 Death Fail" headingSize="h2"
            />
            <InputHeading
                className='vitality-sub' propTextValue="0 Death Save" headingSize="h2"
            />
        </div>
    )
}

export default Vitality