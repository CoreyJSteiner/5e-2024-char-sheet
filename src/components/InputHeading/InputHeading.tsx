import React, { useEffect, useState } from "react"
import './InputHeading.css'

type InputHeadingProps = {
    className?: string
    propTextValue?: string | number
    headingSize?: string
    inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
    onUpdate?: (newValue: string) => void
}

const InputHeading: React.FC<InputHeadingProps> = ({
    className,
    propTextValue,
    headingSize,
    inputMode,
    onUpdate
}) => {
    const [textValue, setTextValue] = useState<string>('')
    const [isEditing, setIsEditing] = useState<boolean>(false)

    useEffect(() => {
        setTextValue(prevVal => propTextValue || propTextValue === 0 ? propTextValue.toString() : prevVal)
    }, [propTextValue])

    const toggleEditHandler = () => {
        if (isEditing && onUpdate) {
            onUpdate(textValue)
        }
        setIsEditing(prevVal => !prevVal)
    }

    const updateTextVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTextValue(e.target.value)
    }

    const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.repeat) return

        if (e.code === 'Enter') toggleEditHandler()
    }

    return (
        <div className={
            `input-heading-display-container
             ${isEditing ? ' input-heading-editable' : ''}
             ${className}`}
        >
            <input className={
                `input-heading-display
                 input-heading-size-${headingSize ? headingSize : 'h1'}`
            }
                type='text'
                onChange={updateTextVal}
                onClick={() => !isEditing ? toggleEditHandler() : null}
                onKeyDown={keyDownHandler}
                value={textValue}
                readOnly={!isEditing}
                spellCheck='false'
                inputMode={inputMode ? inputMode : 'text'}
            />
            {isEditing && (
                <button className='input-heading-edit-button' onClick={toggleEditHandler}>✅</button>
            )}
        </div >
    )
}
export default InputHeading