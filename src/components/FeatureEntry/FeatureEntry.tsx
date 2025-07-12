import './FeatureEntry.css'

type FeatureEntryProps = {
    className?: string
    body?: string
}

const FeatureEntry: React.FC<FeatureEntryProps> = ({ className, body }) => {
    return (
        <div className={`feature-entry-container ${className}`}>
            <p>{body}</p>
        </div>
    )
}

export default FeatureEntry