import './Settings.css'
import { useState } from 'react'


const Settings: React.FC = () => {
    const [displayModal, setDisplayModal] = useState<boolean>(false)

    const toggleModalDisplay = () => {
        setDisplayModal(prev => !prev)
    }

    const settingsModal = () => {
        return (
            <div className='settings-modal-container'>
                <button
                    className='settings-button settings-close material-symbols-outlined'
                    onClick={toggleModalDisplay}
                >
                    close
                </button>
                <ul className='settings-list'>
                    <li className='settings-list-item'>Char Select</li>
                    <li className='settings-list-item'>Import + Select</li>
                    <li className='settings-list-item'>Import</li>
                    <li className='settings-list-item'>Export</li>
                </ul>
            </div>
        )
    }
    return (
        <div className='settings-container'>
            <button
                className='settings-button material-symbols-outlined'
                onClick={toggleModalDisplay}
            >
                settings
            </button>
            {displayModal && (settingsModal())}
        </div>
    )
}

export default Settings