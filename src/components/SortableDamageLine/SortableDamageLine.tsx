import InputHeading from "../InputHeading"
import type { DamageLine } from "../../schema/CharSheetTypes"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities'

const SortableDamageLine: React.FC<{
    id: string
    index: number
    className: string
    damageLine: DamageLine
    activeId: string | null
    updateDamageField: (field: string, idx: number) => (input: string) => void
}> = ({ id, index, className, damageLine, activeId, updateDamageField }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
        isSorting
    } = useSortable({ id })

    const isActive = id === activeId && (isDragging || isSorting)

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isActive ? 1000 : 'auto',
        position: isActive ? 'relative' as const : 'static' as const,
        boxShadow: isDragging ? '0 4px 12px rgba(0, 0, 0, 0.2)' : undefined,
        background: isActive ? '#fff' : undefined,
        willChange: isActive ? 'transform' as const : undefined,
        isolation: isActive ? 'isolate' as const : undefined,
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={className}>
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
        </div >
    )
}

export default SortableDamageLine