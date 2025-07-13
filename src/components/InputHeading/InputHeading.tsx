import React, { useEffect, useRef, useState } from "react"
import './InputHeading.css'

type InputHeadingProps = {
    className?: string
    propTextValue?: string | number
    headingSize?: string
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
    inheritedEditState?: 'edit' | 'display'
    onUpdate?: (newValue: string) => void
}

const InputHeading: React.FC<InputHeadingProps> = ({
    className,
    propTextValue,
    headingSize,
    inputMode,
    inheritedEditState,
    onUpdate,
}) => {
    const isControlledExternally = inheritedEditState !== undefined
    const [internalEditMode, setInternalEditMode] = useState(false)
    const isEditing = isControlledExternally ? inheritedEditState === 'edit' : internalEditMode

    const [textValue, setTextValue] = useState(propTextValue?.toString() || '')

    const prevInheritedEditState = useRef<'edit' | 'display' | undefined>(inheritedEditState)

    useEffect(() => {
        setTextValue(propTextValue?.toString() ?? '')
    }, [propTextValue])

    useEffect(() => {
        if (!inheritedEditState) return
        if (
            prevInheritedEditState.current === 'edit' &&
            inheritedEditState === 'display'
        ) {
            if (onUpdate) onUpdate(textValue)
        }
        prevInheritedEditState.current = inheritedEditState
    }, [inheritedEditState, textValue, onUpdate])

    useEffect(() => {
        return () => {
            if (isEditing && onUpdate) {
                onUpdate(textValue)
            }
        }
    }, [isEditing, textValue, onUpdate])

    const commitUpdate = () => {
        if (onUpdate) onUpdate(textValue)
    }

    // const handleBlur = () => {
    //     if (!isControlledExternally) {
    //         setInternalEditMode(false)
    //     }
    //     commitUpdate()
    // }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter') {
            commitUpdate()
            if (!isControlledExternally) setInternalEditMode(false)
        }
    }

    const handleClick = () => {
        if (!isControlledExternally) setInternalEditMode(true)
    }

    return (
        <div className={`input-heading-display-container ${className ?? ''}`}>
            <div className={`input-heading-size input-heading-size-${headingSize ?? 'h1'}`}>
                <input
                    className={`input-heading-display${isEditing ? ' input-heading-editable' : ''}`}
                    type="text"
                    inputMode={inputMode ?? 'text'}
                    spellCheck={false}
                    value={textValue}
                    readOnly={!isEditing}
                    onClick={handleClick}
                    onChange={(e) => setTextValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                // onBlur={handleBlur}
                />
                {isEditing && !isControlledExternally && (
                    <button className="input-heading-edit-button" onClick={commitUpdate}>✅</button>
                )}
            </div>
        </div>
    )
}

export default InputHeading
