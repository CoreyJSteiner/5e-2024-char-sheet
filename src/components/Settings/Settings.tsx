import { useCharSheetContext } from '../CharSheetContext'
import { CharSheetSchema } from '../../schema/CharSheetSchema'
import { useDownloadJson } from '../Utils/DownloadJson'
import { useImportJson } from '../Utils/UploadJson'
import './Settings.css'
import { useState } from 'react'


const Settings: React.FC = () => {
    const [displayModal, setDisplayModal] = useState<boolean>(false)
    const { charSheet, updateCharSheet } = useCharSheetContext()
    const downloadJson = useDownloadJson()
    const importJson = useImportJson()

    const toggleModalDisplay = () => {
        setDisplayModal(prev => !prev)
    }

    const handleImport = () => {
        importJson({
            onSuccess: (data) => {
                console.log('Imported data:', data)
                try {
                    const parsedData = CharSheetSchema.parse(data)
                    updateCharSheet(parsedData)
                } catch (error) {
                    console.error("Validation failed:", error)
                }
            },
            onError: (error) => console.error('Import failed:', error.message)
        })

        setDisplayModal(false)
    }

    const handleExport = () => {
        downloadJson(charSheet, { fileName: charSheet.name || Date.now().toString() })
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
                    {/* <li className='settings-list-item'>Char Select</li> */}
                    {/* <li className='settings-list-item'>Import + Select</li> */}
                    <li
                        className='settings-list-item'
                        onClick={handleImport}
                    >
                        Import
                    </li>
                    <li
                        className='settings-list-item'
                        onClick={handleExport}
                    >
                        Export
                    </li>
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