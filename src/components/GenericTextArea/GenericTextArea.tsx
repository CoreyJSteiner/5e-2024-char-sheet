import './GenericTextArea.css'

type GenericTextAreaProps = {
    className?: string
}

const GenericTextArea: React.FC<GenericTextAreaProps> = ({ className }) => {
    return (
        <textarea className={`generic-text-area ${className}`}></textarea>
    )
}

export default GenericTextArea