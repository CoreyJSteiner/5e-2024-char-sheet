import React, { useEffect, useState } from 'react'
import './InputHeading.css'

type InputHeadingProps = {
    className?: string
    hide?: boolean
    propTextValue?: string | number
    headingSize?: string
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
    inheritedEditState?: 'edit' | 'display'
    onUpdate?: (newValue: string) => void
}

const InputHeading: React.FC<InputHeadingProps> = ({
    className,
    hide = false,
    propTextValue,
    headingSize = 'h1',
    inputMode = 'text',
    inheritedEditState,
    onUpdate,
}) => {
    const isControlledExternally = inheritedEditState !== undefined
    const [internalEditMode, setInternalEditMode] = useState(false)
    const isEditing = isControlledExternally
        ? inheritedEditState === 'edit'
        : internalEditMode

    const [textValue, setTextValue] = useState(propTextValue?.toString() ?? '')

    useEffect(() => {
        if (!isEditing) {
            setTextValue(propTextValue?.toString() ?? '')
        }
    }, [propTextValue, isEditing])

    useEffect(() => {
        return () => {
            if (isEditing && onUpdate) {
                onUpdate(textValue)
            }
        }
    }, [isEditing, onUpdate, textValue])

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
        <div className={`input-heading-display-container ${className ?? ''}`} style={hideDisplay}>
            <div className={`input-heading-size input-heading-size-${headingSize}`}>
                <input
                    className={`input-heading-display${isEditing ? ' input-heading-editable' : ''}`}
                    type="text"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    inputMode={inputMode}
                    readOnly={!isEditing}
                    spellCheck={false}
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
                />
                {!isControlledExternally && isEditing && (
                    <button className="input-heading-edit-button" onClick={toggleInternalEdit}>
                        ✅
                    </button>
                )}
            </div>
        </div>
    )
}

export default InputHeading
