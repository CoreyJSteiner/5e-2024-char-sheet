import './SpellcastingAbility.css'
import InputHeading from "../InputHeading"

type SpellcastingAbilityProps = {
    id?: string
    className: string
}

const SpellcastingAbility: React.FC<SpellcastingAbilityProps> = ({ id, className }) => {
    return (
        <div id={id} className={`spell-abil-container ${className}`}>
            <InputHeading className='spell-abil-type-heading' propTextValue={'CHA'} inputMode="text" headingSize="h2" />
            <InputHeading className='spell-abil-stat-heading' propTextValue={4} inputMode="numeric" headingSize="h3" />
            <InputHeading className='spell-abil-stat-heading' propTextValue={15} inputMode="numeric" headingSize="h3" />
            <InputHeading className='spell-abil-stat-heading' propTextValue={7} inputMode="numeric" headingSize="h3" />
        </div>
    )
}

export default SpellcastingAbility