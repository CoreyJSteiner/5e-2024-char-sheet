import type { Feature } from '../../schema/CharSheetTypes'
import './FeatureEntry.css'

type FeatureEntryProps = {
    className?: string
    feature: Feature
}

const FeatureEntry: React.FC<FeatureEntryProps> = ({ className, feature }) => {
    return (
        <div className={`feature-entry-container ${className}`}>
            {feature.maxUses && (
                <p>{feature.maxUses}/{feature.currentUses || 0}</p>
            )}
            {feature.reset && (
                <p>{feature.reset === 'LR' ? 'Long Rest' : 'Short Rest'}</p>
            )}
            {feature.title && (
                <p>{feature.title}</p>
            )}
            {feature.heading && (
                <p>{feature.heading}</p>
            )}
            {feature.body && (
                <p>{feature.body}</p>
            )}


        </div>
    )
}

export default FeatureEntry