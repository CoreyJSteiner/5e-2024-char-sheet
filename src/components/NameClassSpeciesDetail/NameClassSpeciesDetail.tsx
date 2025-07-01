import { useCharSheetContext } from '../CharSheetContext'
import InputHeading from '../InputHeading'
import './NameClassSpeciesDetail.css'

const NameClassSpeciesDetail: React.FC = () => {
    const { charSheet, updateCharSheet } = useCharSheetContext()

    return (
        <div className='name-class-species-grid'>
            <InputHeading
                className='name-class-species-main'
                propTextValue={charSheet.name}
                headingSize="h1"
                onUpdate={(newValue) => updateCharSheet({ name: newValue })}
            />
            <InputHeading
                className='name-class-species-sub'
                propTextValue={charSheet.background}
                headingSize="h2"
                onUpdate={(newValue) => updateCharSheet({ background: newValue })}
            />
            <InputHeading
                className='name-class-species-sub'
                propTextValue={charSheet.class}
                headingSize="h2"
                onUpdate={(newValue) => updateCharSheet({ class: newValue })}
            />
            <InputHeading
                className='name-class-species-sub'
                propTextValue={charSheet.species}
                headingSize="h2"
                onUpdate={(newValue) => updateCharSheet({ species: newValue })}
            />
            <InputHeading
                className='name-class-species-sub'
                propTextValue={charSheet.subclass}
                headingSize="h2"
                onUpdate={(newValue) => updateCharSheet({ subclass: newValue })}
            />
        </div>
    )
}

export default NameClassSpeciesDetail