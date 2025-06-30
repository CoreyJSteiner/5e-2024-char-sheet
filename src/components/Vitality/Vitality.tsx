import InputHeading from '../InputHeading'
import './Vitality.css'

const Vitality: React.FC = () => {
    return (
        <div className='vitality-grid'>
            <InputHeading
                className='vitality-main' propTextValue="26 HP" headingSize="h3"
            />
            <InputHeading
                className='vitality-sub' propTextValue="0 Temp" headingSize="h4"
            />
            <InputHeading
                className='vitality-sub' propTextValue="30 Max" headingSize="h4"
            />
            <InputHeading
                className='vitality-sub' propTextValue="4 Hit Dice" headingSize="h4"
            />
            <InputHeading
                className='vitality-sub' propTextValue="4 D8 Hit Dice" headingSize="h4"
            />
            <InputHeading
                className='vitality-sub' propTextValue="0 Death Fail" headingSize="h4"
            />
            <InputHeading
                className='vitality-sub' propTextValue="0 Death Save" headingSize="h4"
            />
        </div>
    )
}

export default Vitality