import React from 'react'
import './RadioToggle.css'

type RadioToggleProps = {
    value?: boolean
    emphasis?: boolean
    useEmphasis?: boolean
    fontSize?: string
    onUpdate?: (profBool: boolean, expertBool?: boolean) => void
}

const RadioToggle: React.FC<RadioToggleProps> = ({
    value = false,
    emphasis = false,
    useEmphasis = false,
    fontSize = '2em',
    onUpdate
}) => {
    const handleClick = () => {
        if (!onUpdate) return

        if (!useEmphasis) {
            onUpdate(!value)
        } else {
            if (!value) {
                onUpdate(true, false)
            } else if (value && !emphasis) {
                onUpdate(true, true)
            } else {
                onUpdate(false, false)
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
        <span className="radio-toggle" style={{ fontSize: fontSize || '2em' }} onClick={handleClick}>
            {symbol}
        </span>
    )
}

export default RadioToggle
