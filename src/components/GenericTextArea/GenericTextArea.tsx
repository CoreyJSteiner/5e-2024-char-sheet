import React, { useState, useEffect } from 'react'
import './GenericTextArea.css'

type GenericTextAreaProps = {
    id?: string
    className?: string
    propTextValue?: string
    onUpdate?: (text: string) => void
}

const GenericTextArea: React.FC<GenericTextAreaProps> = ({
    id = '',
    className = '',
    propTextValue = '',
    onUpdate,
}) => {
    const [textValue, setTextValue] = useState<string>('')
    const [isEditing, setIsEditing] = useState<boolean>(false)

    useEffect(() => {
        setTextValue(prevVal => propTextValue ? propTextValue : prevVal)
    }, [propTextValue])

    const toggleEditHandler = () => {
        if (isEditing && onUpdate) {
            onUpdate(textValue)
        }
        setIsEditing(prevVal => !prevVal)
    }

    const updateTextVal = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value)
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.repeat) return

        if (e.code === 'Enter') toggleEditHandler()
    }

    return (
        <>
            <textarea
                id={id}
                className={`generic-text-area ${className} ${isEditing ? ' generic-text-area-editable' : ''}`}
                value={textValue}
                onChange={updateTextVal}
                onClick={() => !isEditing ? toggleEditHandler() : null}
                onKeyDown={keyDownHandler}
                readOnly={!isEditing}
            />
            {isEditing && (
                <button className='generic-text-area-edit-button' onClick={toggleEditHandler}>✅</button>
            )}
        </>
    )
}

export default GenericTextArea