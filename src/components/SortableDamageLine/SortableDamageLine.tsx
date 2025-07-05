import InputHeading from "../InputHeading"
import type { DamageLine } from "../../schema/CharSheetTypes"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities'

const SortableDamageLine: React.FC<{
    id: string
    index: number
    damageLine: DamageLine
    updateDamageField: (field: string, idx: number) => (input: string) => void
}> = ({ id, index, damageLine, updateDamageField }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='damage-line'>
            <InputHeading
                className='damage-line-name'
                propTextValue={damageLine.name}
                inputMode='text'
                headingSize='h4'
                onUpdate={updateDamageField('name', index)}
            />
            <InputHeading
                className='damage-line-atk-dc'
                propTextValue={damageLine.atkBonusOrDc}
                inputMode='text'
                headingSize='h4'
                onUpdate={updateDamageField('atkBonusOrDc', index)}
            />
            <InputHeading
                className='damage-line-dmg-type'
                propTextValue={damageLine.damageAndType}
                inputMode='text'
                headingSize='h4'
                onUpdate={updateDamageField('damageAndType', index)}
            />
            <InputHeading
                className='damage-line-notes'
                propTextValue={damageLine.notes}
                inputMode='text'
                headingSize='h4'
                onUpdate={updateDamageField('notes', index)}
            />
        </div>
    )
}

export default SortableDamageLine