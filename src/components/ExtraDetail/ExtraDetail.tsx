import SingleStat from '../SingleStat'
import './ExtraDetail.css'

type ExtraDetailProps = {
    id?: string
}

const ExtraDetail: React.FC<ExtraDetailProps> = ({ id }) => {
    return (
        <div id={id} className='extra-detail-container'>
            <SingleStat fieldName='initiative' className='extra-detail-main' inputMode='numeric' />
            <SingleStat fieldName='speed' className='extra-detail-main' inputMode='numeric' />
            <SingleStat fieldName='size' className='extra-detail-main' inputMode='text' />
            <SingleStat fieldName='passivePerception' className='extra-detail-main' inputMode='numeric' />
        </div>
    )
}

export default ExtraDetail