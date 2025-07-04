import React from 'react'
import './RadioToggle.css'

type RadioToggleProps = {
    value?: boolean
    emphasis?: boolean
    useEmphasis?: boolean
    onUpdate?: (newValue: boolean) => void
}

const RadioToggle: React.FC<RadioToggleProps> = ({
    value = false,
    emphasis = false,
    useEmphasis = false,
    onUpdate
}) => {
    const handleClick = () => {
        if (!onUpdate) return

        if (!useEmphasis) {
            onUpdate(!value)
        } else {
            if (!value) {
                onUpdate(true)
            } else if (value && !emphasis) {
                onUpdate(true)
            } else {
                onUpdate(false)
            }
        }
    }

    let symbol = '○'
    if (value && useEmphasis && emphasis) {
        symbol = '◉'
    } else if (value) {
        symbol = '●'
    }

    return (
        <span className="radio-toggle" onClick={handleClick}>
            {symbol}
        </span>
    )
}

export default RadioToggle
