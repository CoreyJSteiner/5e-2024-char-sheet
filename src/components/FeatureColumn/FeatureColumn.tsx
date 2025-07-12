import { useCharSheetContext } from '../CharSheetContext'
import FeatureEntry from '../FeatureEntry'
import './FeatureColumn.css'

type FeatureColumnProps = {
    id?: string
    className?: string
    featureType: 'classFeatures' | 'speciesFeatures' | 'featFeatures'
}

const FeatureColumn: React.FC<FeatureColumnProps> = ({ id, className, featureType }) => {
    const { charSheet } = useCharSheetContext()
    return (
        <div id={id} className={`feature-column-container ${className}`}>
            {(featureType && charSheet[featureType]) && (
                charSheet[featureType].map(feature => {
                    return (
                        <FeatureEntry feature={feature} />
                    )
                })
            )}
        </div>
    )
}

export default FeatureColumn