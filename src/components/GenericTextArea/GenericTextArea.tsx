import React, { useState, useEffect } from 'react'
import './GenericTextArea.css'

type GenericTextAreaProps = {
    id?: string
    className?: string
    hide?: boolean
    propTextValue?: string
    inheritedEditState?: 'edit' | 'display'
    onUpdate?: (text: string) => void
}

const GenericTextArea: React.FC<GenericTextAreaProps> = ({
    id = '',
    className = '',
    hide = false,
    propTextValue = '',
    inheritedEditState,
    onUpdate,
}) => {
    const isControlledExternally = inheritedEditState !== undefined
    const [internalEditMode, setInternalEditMode] = useState(false)
    const isEditing = isControlledExternally
        ? inheritedEditState === 'edit'
        : internalEditMode
    const [textValue, setTextValue] = useState<string>('')
    // const [isEditing, setIsEditing] = useState<boolean>(false)

    useEffect(() => {
        setTextValue(prevVal => propTextValue ? propTextValue : prevVal)
    }, [propTextValue])

    // const toggleEditHandler = () => {
    //     if (isEditing && onUpdate) {
    //         onUpdate(textValue)
    //     }
    //     setIsEditing(prevVal => !prevVal)
    // }

    const updateTextVal = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value)
    }

    // const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.repeat) return

    //     if (e.code === 'Enter') toggleEditHandler()
    // }

    const commitUpdate = () => {
        if (onUpdate) onUpdate(textValue)
    }

    const toggleInternalEdit = () => {
        if (isEditing) {
            commitUpdate()
        }
        setInternalEditMode(!internalEditMode)
    }

    const hideDisplay = hide ? { display: "none" } : {}

    return (
        <>
            <textarea
                id={id}
                className={`generic-text-area ${className} ${isEditing ? ' generic-text-area-editable' : ''}`}
                style={hideDisplay}
                value={textValue}
                onChange={updateTextVal}
                // onClick={() => !isEditing ? toggleEditHandler() : null}
                // onKeyDown={keyDownHandler}
                onClick={() => {
                    if (!isControlledExternally && !isEditing) {
                        setInternalEditMode(true)
                    }
                }}
                onKeyDown={(e) => {
                    if (e.code === 'Enter' && !isControlledExternally) {
                        toggleInternalEdit()
                    }
                }}
                readOnly={!isEditing}
            />
            {!isControlledExternally && isEditing && (
                <button className='generic-text-area-edit-button' onClick={toggleInternalEdit}>✅</button>
            )}
        </>
    )
}

export default GenericTextArea