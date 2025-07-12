import GenericTextArea from '../GenericTextArea'
import RadioToggle from '../RadioToggle/RadioToggle'
import './EquipmentProfs.css'

type EquipmentProfProps = {
    id?: string
    className?: string
}

const EquipmentProfs: React.FC<EquipmentProfProps> = ({ id, className }) => {
    return (
        <div id={id} className={`equipment-prof-container ${className}`}>
            <div className='equipment-prof-armor-section'>
                <p>Armor Training</p>
                <div className='equipment-prof-armor-item'>
                    <RadioToggle useEmphasis={false} />
                    <p>Light</p>
                </div>
                <div className='equipment-prof-armor-item'>
                    <RadioToggle useEmphasis={false} />
                    <p>Medium</p>
                </div>
                <div className='equipment-prof-armor-item'>
                    <RadioToggle useEmphasis={false} />
                    <p>Heavy</p>
                </div>
                <div className='equipment-prof-armor-item'>
                    <RadioToggle useEmphasis={false} />
                    <p>Shields</p>
                </div>
            </div>
            <div className='equipment-prof-weapons-section'>
                <p className='equipment-prof-label'>Weapons</p>
                <GenericTextArea className='equipment-prof-text' />
            </div>
            <div className='equipment-prof-tools-section'>
                <p className='equipment-prof-label'>Tools</p>
                <GenericTextArea className='equipment-prof-text' />
            </div>
        </div>
    )
}

export default EquipmentProfs