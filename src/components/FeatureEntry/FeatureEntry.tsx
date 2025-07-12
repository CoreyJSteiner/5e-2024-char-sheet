import type { Feature } from '../../schema/CharSheetTypes'
import './FeatureEntry.css'

type FeatureEntryProps = {
    className?: string
    feature: Feature
}

const FeatureEntry: React.FC<FeatureEntryProps> = ({ className, feature }) => {
    return (
        <div className={`feature-entry-container ${className}`}>
            <p>{feature.body}</p>
        </div>
    )
}

export default FeatureEntry