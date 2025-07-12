import { useCharSheetContext } from '../CharSheetContext'
import GenericTextArea from '../GenericTextArea'
import RadioToggle from '../RadioToggle/RadioToggle'
import './EquipmentProfs.css'

type EquipmentProfProps = {
    id?: string
    className?: string
}

const EquipmentProfs: React.FC<EquipmentProfProps> = ({ id, className }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    return (
        <div id={id} className={`equipment-prof-container ${className}`}>
            <div className='equipment-prof-armor-section'>
                <p className='equipment-prof-armor-section-label'>Armor Training</p>
                <div className='equipment-prof-armor-buttons-section'>
                    <div className='equipment-prof-armor-item'>
                        <RadioToggle
                            value={charSheet.armorProf?.light}
                            useEmphasis={false}
                            onUpdate={(newValue => updateCharSheet(
                                { armorProf: { ...charSheet.armorProf, light: newValue } }
                            ))}
                        />
                        <p className='equipment-prof-armor-label'>Light</p>
                    </div>
                    <div className='equipment-prof-armor-item'>
                        <RadioToggle
                            value={charSheet.armorProf?.medium}
                            useEmphasis={false}
                            onUpdate={(newValue => updateCharSheet(
                                { armorProf: { ...charSheet.armorProf, medium: newValue } }
                            ))}
                        />
                        <p className='equipment-prof-armor-label'>Medium</p>
                    </div>
                    <div className='equipment-prof-armor-item'>
                        <RadioToggle
                            value={charSheet.armorProf?.heavy}
                            useEmphasis={false}
                            onUpdate={(newValue => updateCharSheet(
                                { armorProf: { ...charSheet.armorProf, heavy: newValue } }
                            ))}
                        />
                        <p className='equipment-prof-armor-label'>Heavy</p>
                    </div>
                    <div className='equipment-prof-armor-item'>
                        <RadioToggle
                            value={charSheet.armorProf?.shields}
                            useEmphasis={false}
                            onUpdate={(newValue => updateCharSheet(
                                { armorProf: { ...charSheet.armorProf, shields: newValue } }
                            ))}
                        />
                        <p className='equipment-prof-armor-label'>Shields</p>
                    </div>
                </div>
            </div>
            <div className='equipment-prof-weapons-section'>
                <p className='equipment-prof-label'>Weapons</p>
                <GenericTextArea
                    className='equipment-prof-text'
                    propTextValue={charSheet.weaponProf}
                    onUpdate={newValue => updateCharSheet({ weaponProf: newValue })}
                />
            </div>
            <div className='equipment-prof-tools-section'>
                <p className='equipment-prof-label'>Tools</p>
                <GenericTextArea
                    className='equipment-prof-text'
                    propTextValue={charSheet.toolProf}
                    onUpdate={newValue => updateCharSheet({ toolProf: newValue })}
                />
            </div>
        </div>
    )
}

export default EquipmentProfs