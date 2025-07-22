import { useState } from 'react'
import type { Feature, FeatureField } from '../../schema/CharSheetTypes'
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
    const { title, heading, body, reset, maxUses = 0, currentUses = 0 } = feature
    const showToggles = maxUses ? maxUses <= 4 && maxUses > 0 : false

    const updateFeatureField = (featureField: FeatureField) => (input: string) => {
        if (input !== feature[featureField]) {
            const updated = { ...feature, [featureField]: input }
            onUpdate(updated)
        }
    }

    const updateMaxUses = (input: string) => {
        const parsed = parseInt(input)
        if (isNaN(parsed)) return

        updateFeatureField('maxUses')(input)
    }

    const updateSpentUses = (input: string) => {
        let parsed = parseInt(input)
        if (isNaN(parsed)) return
        if (parsed > maxUses) parsed = maxUses

        updateFeatureField('currentUses')(input)
    }

    const toggleUse = (index: number) => () => {
        const useNumber = index + 1
        if (!feature.currentUses || feature.currentUses > useNumber || feature.currentUses < useNumber) {
            const updated = { ...feature, currentUses: useNumber }
            onUpdate(updated)
        } else if (feature.currentUses === useNumber) {
            const updated = { ...feature, currentUses: index }
            onUpdate(updated)
        }
    }

    const radioDisplay = () => {
        return Array.from({ length: 4 }).map((_, idx) => {
            const isHidden = idx >= maxUses
            return (
                <div key={idx} className="feature-uses-toggle-wrapper" style={showToggles ? {} : { display: "none" }}>
                    <RadioToggle
                        value={idx < currentUses}
                        hide={isHidden}
                        useEmphasis={false}
                        fontSize="1em"
                        onUpdate={toggleUse(idx)}
                    />
                </div >
            )
        })
    }

    const inputDisplay = () => {
        return (
            <div className="feature-uses-spent-wrapper">
                <InputHeading
                    className="feature-uses-max"
                    hide={isEditing || !showToggles ? false : true}
                    headingSize="h4"
                    inputMode="numeric"
                    propTextValue={maxUses}
                    inheritedEditState={isEditing ? 'edit' : 'display'}
                    onUpdate={updateMaxUses}
                />
                <InputHeading
                    className="feature-uses-spent"
                    hide={isEditing || !showToggles ? false : true}
                    headingSize="h4"
                    inputMode="numeric"
                    propTextValue={currentUses}
                    inheritedEditState={isEditing ? 'edit' : 'display'}
                    onUpdate={updateSpentUses}
                />
            </div>
        )
    }

    const selectDisplayStyle = () => {
        return !isEditing && reset ? {} : { display: "none" }
    }

    const selectEditStyle = () => {
        return isEditing ? {} : { display: "none" }
    }

    return (
        <div className={`feature-entry-container ${className}`}>
            <button style={{ padding: '1em', backgroundColor: 'red' }} onClick={() => setIsEditing(prev => !prev)}></button>
            <div className="feature-uses-entry" key={crypto.randomUUID()}>
                <div className="feature-uses-tracker-container">
                    {radioDisplay()}
                    {inputDisplay()}
                </div>
            </div>
            {/* {(reset || isEditing) && ( */}
            <p style={selectDisplayStyle()}>{reset}</p>
            <select
                value={reset}
                onChange={(e) => updateFeatureField('reset')(e.target.value)}
                style={selectEditStyle()}
            >
                <option value={''}></option>
                <option value={'LR'}>Long Rest</option>
                <option value={'SR'}>Short Rest</option>
            </select>

            {/* )} */}
            <InputHeading
                propTextValue={title}
                hide={isEditing || title ? false : true}
                headingSize='h1'
                inputMode='text'
                inheritedEditState={isEditing ? 'edit' : 'display'}
                onUpdate={updateFeatureField('title')}
            />

            <InputHeading
                propTextValue={heading}
                hide={isEditing || heading ? false : true}
                headingSize='h3'
                inputMode='text'
                inheritedEditState={isEditing ? 'edit' : 'display'}
                onUpdate={updateFeatureField('heading')}
            />

            <GenericTextArea
                propTextValue={body}
                inheritedEditState={isEditing ? 'edit' : 'display'}
                onUpdate={updateFeatureField('body')}
            />


        </div>
    )
}

export default FeatureEntry