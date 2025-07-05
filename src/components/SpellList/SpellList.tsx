import { useCharSheetContext } from '../CharSheetContext'
import SortableSpellLine from '../SortableSpellLine/SortableDamageLine'
import { updateNestedValue } from '../Utils/Helpers'
import './SpellList.css'

import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent,
    type DragStartEvent
} from '@dnd-kit/core'

import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy
} from '@dnd-kit/sortable'

import { useRef, useState } from 'react'

type SpellListProps = {
    id?: string
    className?: string
}

const SpellList: React.FC<SpellListProps> = ({ id, className }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()
    const [activeId, setActiveId] = useState<string | null>(null)
    const idMapRef = useRef<Map<number, string>>(new Map())

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 5 }
        })
    )
    const spells = charSheet.spellList ?? []

    spells.forEach((_, idx) => {
        if (!idMapRef.current.has(idx)) {
            idMapRef.current.set(idx, crypto.randomUUID())
        }
    })

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id as string)
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event
        setActiveId(null)
        if (!over || !charSheet.spellList) return

        const entries = Array.from(idMapRef.current.entries())
        const oldIndex = entries.find(([, id]) => id === active.id)?.[0]
        const newIndex = entries.find(([, id]) => id === over.id)?.[0]

        if (
            oldIndex != null &&
            newIndex != null &&
            oldIndex !== newIndex
        ) {
            const newOrder = arrayMove(charSheet.spellList, oldIndex, newIndex)
            updateCharSheet({ spellList: newOrder })
        }
    }

    const updateSpellField = (field: string, idx: number) => (input: string) => {
        const updated = updateNestedValue(charSheet, ['spellList', idx, field], input)
        updateCharSheet(updated)
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={spells.map((_, idx) => idMapRef.current.get(idx)!)}
                strategy={verticalListSortingStrategy}
            >
                <div id={id} className={`spell-list-section-container ${className}`}>
                    <div className={'spell-list-section'}>
                        {spells.map((line, idx) => {
                            const stableId = idMapRef.current.get(idx)

                            if (!stableId) {
                                console.warn(`Missing stable ID for spell at index ${idx}`)
                                return null
                            }

                            return (
                                <SortableSpellLine
                                    key={stableId}
                                    id={stableId}
                                    index={idx}
                                    className='spell-line'
                                    spellLine={line}
                                    updateSpellField={updateSpellField}
                                    activeId={activeId}
                                />
                            )
                        })}
                    </div>
                </div>
            </SortableContext>
        </DndContext>
    )
}

export default SpellList
