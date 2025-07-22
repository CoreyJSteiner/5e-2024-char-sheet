import React, { useState, useEffect, useRef } from 'react'
import './GenericTextArea.css'

type GenericTextAreaProps = {
    id?: string
    className?: string
    hide?: boolean
    propTextValue?: string
    inheritedEditState?: 'edit' | 'display'
    autoResize?: boolean
    onUpdate?: (text: string) => void
}

const GenericTextArea: React.FC<GenericTextAreaProps> = ({
    id = '',
    className = '',
    hide = false,
    propTextValue = '',
    inheritedEditState,
    autoResize,
    onUpdate,
}) => {
    const isControlledExternally = inheritedEditState !== undefined
    const [internalEditMode, setInternalEditMode] = useState(false)
    const isEditing = isControlledExternally
        ? inheritedEditState === 'edit'
        : internalEditMode
    const [textValue, setTextValue] = useState<string>('')
    const textareaRef = React.useRef<HTMLTextAreaElement>(null)
    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        if (autoResize && textareaRef.current) {
            textareaRef.current.style.height = 'auto'
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [textValue, autoResize])

    useEffect(() => {
        setTextValue(prevVal => propTextValue ? propTextValue : prevVal)
    }, [propTextValue])

    const updateTextVal = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        setTextValue(value)

        if (onUpdate) {
            if (debounceTimer.current) {
                clearTimeout(debounceTimer.current)
            }

            debounceTimer.current = setTimeout(() => {
                onUpdate(value)
            }, 300)
        }
    }

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
                ref={textareaRef}
                className={`generic-text-area ${className} ${isEditing ? ' generic-text-area-editable' : ''}`}
                style={hideDisplay}
                value={textValue}
                onChange={updateTextVal}
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