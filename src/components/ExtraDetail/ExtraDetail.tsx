import TopStat from '../TopStat'
import './ExtraDetail.css'

type ExtraDetailProps = {
    id?: string
}

const ExtraDetail: React.FC<ExtraDetailProps> = ({ id }) => {
    return (
        <div id={id} className='extra-detail-container'>
            <TopStat fieldName='initiative' className='extra-detail-main' inputMode='numeric' />
            <TopStat fieldName='speed' className='extra-detail-main' inputMode='numeric' />
            <TopStat fieldName='size' className='extra-detail-main' inputMode='text' />
            <TopStat fieldName='passivePerception' className='extra-detail-main' inputMode='numeric' />
        </div>
    )
}

export default ExtraDetail