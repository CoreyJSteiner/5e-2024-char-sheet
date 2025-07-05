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
    type UniqueIdentifier,
    type DragEndEvent
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    // useSortable,
    verticalListSortingStrategy
} from '@dnd-kit/sortable'
// import { CSS } from '@dnd-kit/utilities'


type WeaponsAndDamageProps = {
    id?: string
    className?: string
}

const WeaponsAndDamage: React.FC<WeaponsAndDamageProps> = ({ id, className }) => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 5 }
        })
    )

    const handleDragEnd = (event: DragEndEvent) => {
        if (!charSheet.weaponsAndDamage) return
        const { active, over } = event

        if (active.id !== over?.id) {
            const oldIndex = charSheet.weaponsAndDamage.findIndex(item => item.name === active.id)
            const newIndex = charSheet.weaponsAndDamage.findIndex(item => item.name === over?.id)

            const newOrder = arrayMove(charSheet.weaponsAndDamage, oldIndex, newIndex)

            updateCharSheet({ weaponsAndDamage: newOrder })
        }
    }


    const updateDamageField = (field: string, idx: number) => (input: string) => {
        const updated = updateNestedValue(charSheet, ['weaponsAndDamage', idx, field], input)
        console.log(updated);

        updateCharSheet(updated)
    }

    return (
        // <div id={id} className={`damage-section-container ${className}`}>
        //     <div className={`damage-section`}>
        //         {charSheet.weaponsAndDamage && (
        //             charSheet.weaponsAndDamage.map((damageLine, idx) => (
        //                 <div key={idx} className='damage-line'>
        //                     <InputHeading
        //                         className='damage-line-name'
        //                         propTextValue={damageLine.name}
        //                         inputMode='text'
        //                         headingSize='h4'
        //                         onUpdate={updateDamageField('name', idx)}
        //                     />
        //                     <InputHeading
        //                         className='damage-line-atk-dc'
        //                         propTextValue={damageLine.atkBonusOrDc}
        //                         inputMode='text'
        //                         headingSize='h4'
        //                         onUpdate={updateDamageField('atkBonusOrDc', idx)}
        //                     />
        //                     <InputHeading
        //                         className='damage-line-dmg-type'
        //                         propTextValue={damageLine.damageAndType}
        //                         inputMode='text'
        //                         headingSize='h4'
        //                         onUpdate={updateDamageField('damageAndType', idx)}
        //                     />
        //                     <InputHeading
        //                         className='damage-line-notes'
        //                         propTextValue={damageLine.notes}
        //                         inputMode='text'
        //                         headingSize='h4'
        //                         onUpdate={updateDamageField('notes', idx)}
        //                     />
        //                 </div>
        //             ))
        //         )}
        //     </div>
        // </div>

        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >

            <SortableContext
                items={charSheet.weaponsAndDamage?.map((item) => item.name as UniqueIdentifier) || []}
                strategy={verticalListSortingStrategy}
            >
                <div
                    id={id}
                    className={`damage-section-container ${className}`}
                >
                    {charSheet.weaponsAndDamage && (
                        charSheet.weaponsAndDamage.map((line, idx) => (
                            <SortableDamageLine
                                key={line.name}
                                id={line.name || idx.toString()}
                                index={idx}
                                damageLine={line}
                                updateDamageField={updateDamageField}
                            />
                        ))
                    )}
                </div >
            </SortableContext>
        </DndContext >

    )
}

export default WeaponsAndDamage