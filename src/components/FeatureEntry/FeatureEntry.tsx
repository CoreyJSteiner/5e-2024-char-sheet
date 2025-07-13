import { useState } from 'react'
import type { Feature } from '../../schema/CharSheetTypes'
import GenericTextArea from '../GenericTextArea'
import InputHeading from '../InputHeading'
import RadioToggle from '../RadioToggle'
import './FeatureEntry.css'

type FeatureEntryProps = {
    className?: string
    feature: Feature
    onUpdate: (feature: Feature) => void
}

const FeatureEntry: React.FC<FeatureEntryProps> = ({ className, feature, onUpdate }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const { maxUses = 0, currentUses = 0 } = feature
    const showToggles = maxUses ? maxUses <= 4 && maxUses > 0 : false

    const updateMaxUses = (input: string) => {
        const parsed = parseInt(input)
        if (isNaN(parsed)) return

        if (parsed !== feature.maxUses) {
            const updated = { ...feature, maxUses: parsed }
            onUpdate(updated)
        }
    }

    const updateSpentUses = (input: string) => {
        let parsed = parseInt(input)
        if (isNaN(parsed)) return
        if (parsed > maxUses) parsed = maxUses

        if (parsed !== feature.currentUses) {
            const updated = { ...feature, currentUses: parsed }
            onUpdate(updated)
        }
    }

    const toggleUse = (index: number) => () => {
        console.log(`toggleIdx:${index}`);

        const useNumber = index + 1
        if (!feature.currentUses || feature.currentUses > useNumber || feature.currentUses < useNumber) {
            const updated = { ...feature, currentUses: useNumber }
            onUpdate(updated)
        } else if (feature.currentUses === useNumber) {
            const updated = { ...feature, currentUses: index }
            onUpdate(updated)
        }
    }

    return (
        <div className={`feature-entry-container ${className}`}>
            <button style={{ padding: '1em', backgroundColor: 'red' }} onClick={() => setIsEditing(prev => !prev)}></button>
            <div className="feature-uses-entry" key={crypto.randomUUID()}>
                <div className="feature-uses-tracker-container">
                    {maxUses === 0 && !isEditing ? (
                        <div className="feature-uses-entry-placeholder" />
                    ) : showToggles && !isEditing ? (
                        Array.from({ length: 4 }).map((_, idx) => {
                            const isVisible = idx < maxUses
                            return (
                                <div key={idx} className="feature-uses-toggle-wrapper">
                                    {isVisible ? (
                                        <RadioToggle
                                            value={idx < currentUses}
                                            useEmphasis={false}
                                            fontSize="1em"
                                            onUpdate={toggleUse(idx)}
                                        />
                                    ) : (
                                        <div className="spell-slot-placeholder" />
                                    )}
                                </div>
                            )
                        })
                    ) : (
                        <div className="feature-uses-spent-wrapper">
                            <InputHeading
                                className="feature-uses-max"
                                headingSize="h4"
                                inputMode="numeric"
                                propTextValue={maxUses}
                                inheritedEditState={isEditing ? 'edit' : 'display'}
                                onUpdate={updateMaxUses}
                            />
                            <InputHeading
                                className="feature-uses-spent"
                                headingSize="h4"
                                inputMode="numeric"
                                propTextValue={currentUses}
                                inheritedEditState={isEditing ? 'edit' : 'display'}
                                onUpdate={updateSpentUses}
                            />
                        </div>
                    )}
                </div>
            </div>
            {feature.reset && (
                <p>{feature.reset === 'LR' ? 'Long Rest' : 'Short Rest'}</p>
                //picklist
            )}
            {feature.title && (
                // <p>{feature.title}</p>
                <InputHeading propTextValue={feature.title} headingSize='h1' />
            )}
            {feature.heading && (
                // <p>{feature.heading}</p>
                <InputHeading propTextValue={feature.heading} headingSize='h3' />
            )}
            {feature.body && (
                // <p>{feature.body}</p>
                <GenericTextArea propTextValue={feature.body} />
            )}


        </div>
    )
}

export default FeatureEntry