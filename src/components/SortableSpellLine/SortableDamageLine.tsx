import InputHeading from "../InputHeading"
import type { SpellLine } from "../../schema/CharSheetTypes"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from '@dnd-kit/utilities'
import RadioToggle from "../RadioToggle/RadioToggle"

const SortableSpellLine: React.FC<{
    id: string
    index: number
    className: string
    spellLine: SpellLine
    activeId: string | null
    updateSpellField: (field: string, idx: number) => (input: string) => void
}> = ({ id, index, className, spellLine, activeId, updateSpellField }) => {
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
                className='spell-line-level'
                propTextValue={spellLine.spellLevel}
                inputMode='text'
                headingSize='h4'
                onUpdate={updateSpellField('spellLevel', index)}
            />
            <InputHeading
                className='spell-line-name'
                propTextValue={spellLine.name}
                inputMode='text'
                headingSize='h4'
                onUpdate={updateSpellField('name', index)}
            />
            <InputHeading
                className='spell-line-casting-time'
                propTextValue={spellLine.castingTime}
                inputMode='text'
                headingSize='h4'
                onUpdate={updateSpellField('castingTime', index)}
            />
            <InputHeading
                className='spell-line-range'
                propTextValue={spellLine.range}
                inputMode='text'
                headingSize='h4'
                onUpdate={updateSpellField('range', index)}
            />
            <RadioToggle
                value={spellLine.concentrationReq}
                useEmphasis={false}
            // onUpdate={updateSpellField('concentrationReq', index)}
            />
            <RadioToggle
                value={spellLine.materialReq}
                useEmphasis={false}
            // onUpdate={updateSpellField('materialReq', index)}
            />
            <RadioToggle
                value={spellLine.ritualAllow}
                useEmphasis={false}
            // onUpdate={updateSpellField('materialReq', index)}
            />
            <InputHeading
                className='spell-line-notes'
                propTextValue={spellLine.notes}
                inputMode='text'
                headingSize='h4'
                onUpdate={updateSpellField('notes', index)}
            />
        </div >
    )
}

export default SortableSpellLine