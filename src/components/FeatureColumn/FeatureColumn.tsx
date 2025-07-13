import type { Feature } from '../../schema/CharSheetTypes'
import { useCharSheetContext } from '../CharSheetContext'
import FeatureEntry from '../FeatureEntry'
import './FeatureColumn.css'

type FeatureColumnProps = {
    id?: string
    className?: string
    featureType: 'classFeatures' | 'speciesFeatures' | 'featFeatures'
}

const FeatureColumn: React.FC<FeatureColumnProps> = ({ id, className, featureType }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    const updateFeature = (index: number) => (feature: Feature) => {
        const updateArray = charSheet[featureType] ? [...charSheet[featureType]] : []
        updateArray[index] = feature

        updateCharSheet({ [featureType]: updateArray })
    }

    return (
        <div id={id} className={`feature-column-container ${className}`}>
            {(featureType && charSheet[featureType]) && (
                charSheet[featureType].map((feature, index) => {
                    return (
                        <FeatureEntry
                            key={index}
                            feature={feature}
                            onUpdate={updateFeature(index)}
                        />
                    )
                })
            )}
        </div>
    )
}

export default FeatureColumn