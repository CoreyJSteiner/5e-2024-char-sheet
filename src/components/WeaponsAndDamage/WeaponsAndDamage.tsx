import { useCharSheetContext } from '../CharSheetContext'
import SortableDamageLine from '../SortableDamageLine/SortableDamageLine'
import { updateNestedValue } from '../Utils/Helpers'
import './WeaponsAndDamage.css'

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

type WeaponsAndDamageProps = {
    id?: string
    className?: string
}

const WeaponsAndDamage: React.FC<WeaponsAndDamageProps> = ({ id, className }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()
    const [activeId, setActiveId] = useState<string | null>(null)
    const idMapRef = useRef<Map<number, string>>(new Map())

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 5 }
        })
    )
    const weapons = charSheet.weaponsAndDamage ?? []

    weapons.forEach((_, idx) => {
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
        if (!over || !charSheet.weaponsAndDamage) return

        const entries = Array.from(idMapRef.current.entries())
        const oldIndex = entries.find(([, id]) => id === active.id)?.[0]
        const newIndex = entries.find(([, id]) => id === over.id)?.[0]

        if (
            oldIndex != null &&
            newIndex != null &&
            oldIndex !== newIndex
        ) {
            const newOrder = arrayMove(charSheet.weaponsAndDamage, oldIndex, newIndex)
            updateCharSheet({ weaponsAndDamage: newOrder })
        }
    }

    const updateDamageField = (field: string, idx: number) => (input: string) => {
        const updated = updateNestedValue(charSheet, ['weaponsAndDamage', idx, field], input)
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
                items={weapons.map((_, idx) => idMapRef.current.get(idx)!)}
                strategy={verticalListSortingStrategy}
            >
                <div id={id} className={`damage-section-container ${className}`}>
                    <div className={'damage-section'}>
                        {weapons.map((line, idx) => {
                            const stableId = idMapRef.current.get(idx)

                            if (!stableId) {
                                console.warn(`Missing stable ID for weapon at index ${idx}`)
                                return null
                            }

                            return (
                                <SortableDamageLine
                                    key={stableId}
                                    id={stableId}
                                    index={idx}
                                    className='damage-line'
                                    damageLine={line}
                                    updateDamageField={updateDamageField}
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

export default WeaponsAndDamage
