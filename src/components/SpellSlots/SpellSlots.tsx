import { useCharSheetContext } from '../CharSheetContext'
import InputHeading from '../InputHeading'
import RadioToggle from '../RadioToggle/RadioToggle'
import './SpellSlots.css'

type SpellSlotsProps = {
    id?: string
    className?: string
}

const SpellSlots: React.FC<SpellSlotsProps> = ({ id, className }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    const updateMaxSlots = (level: number) => (input: string) => {
        const parsed = parseInt(input)
        if (isNaN(parsed)) return

        const updated = { ...charSheet }
        if (!updated.spellSlots) updated.spellSlots = {}

        const prev = updated.spellSlots[level] ?? {
            slotLevel: level,
            spentSlots: 0,
        }

        updated.spellSlots[level] = {
            ...prev,
            slotLevel: level,
            maxSlots: parsed,
            spentSlots: Math.min(prev.spentSlots ?? 0, parsed),
        }

        updateCharSheet(updated)
    }

    const updateSpentSlots = (level: number) => (input: string) => {
        const parsed = parseInt(input)
        if (isNaN(parsed)) return

        const updated = { ...charSheet }
        if (!updated.spellSlots) updated.spellSlots = {}

        const prev = updated.spellSlots[level] ?? { slotLevel: level, maxSlots: 0 }

        updated.spellSlots[level] = {
            ...prev,
            slotLevel: level,
            spentSlots: Math.min(parsed, prev.maxSlots ?? 0),
        }

        updateCharSheet(updated)
    }

    const toggleSlot = (level: number, index: number) => () => {
        const updated = { ...charSheet }
        if (!updated.spellSlots) updated.spellSlots = {}

        const slot = updated.spellSlots[level] ?? { slotLevel: level, maxSlots: 0, spentSlots: 0 }
        const { spentSlots = 0 } = slot

        const newSpent = index < spentSlots ? index : index + 1

        updated.spellSlots[level] = {
            ...slot,
            spentSlots: newSpent,
        }

        updateCharSheet(updated)
    }

    return (
        <div id={id} className={`spell-slots-grid ${className}`}>
            {Array.from({ length: 9 }, (_, i) => {
                const level = i + 1
                const slot = charSheet.spellSlots?.[level] ?? {}
                const maxSlots = slot.maxSlots ?? 0
                const spentSlots = slot.spentSlots ?? 0
                const showToggles = maxSlots <= 4 && maxSlots > 0

                return (
                    <div className="spell-slots-entry" key={level}>
                        <div className="spell-slot-label">Level {level}</div>
                        <InputHeading
                            className="spell-slots-max"
                            headingSize="h4"
                            inputMode="numeric"
                            propTextValue={maxSlots}
                            onUpdate={updateMaxSlots(level)}
                        />
                        <div className="spell-slot-tracker-container">
                            {maxSlots === 0 ? (
                                <div className="spell-slot-empty-tracker-placeholder" />
                            ) : showToggles ? (
                                Array.from({ length: 4 }).map((_, idx) => {
                                    const isVisible = idx < maxSlots
                                    return (
                                        <div key={idx} className="spell-slot-toggle-wrapper">
                                            {isVisible ? (
                                                <RadioToggle
                                                    value={idx < spentSlots}
                                                    useEmphasis={false}
                                                    fontSize="1em"
                                                    onUpdate={toggleSlot(level, idx)}
                                                />
                                            ) : (
                                                <div className="spell-slot-placeholder" />
                                            )}
                                        </div>
                                    )
                                })
                            ) : (
                                <div className="spell-slots-spent-wrapper">
                                    <InputHeading
                                        className="spell-slots-spent"
                                        headingSize="h4"
                                        inputMode="numeric"
                                        propTextValue={spentSlots}
                                        onUpdate={updateSpentSlots(level)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SpellSlots
