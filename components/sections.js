import Section from "./section"

export default function Sections({sections}){
    let secs = sections.map(
        (section, idx) => {
            return (
                <Section
                    sectionType={section.sys.contentType.sys.id}
                    section={section}
                    key={section.sys.id}
                    ArrayKey={idx}
                    sys={section.sys}
                /> 
            )      
        }
    )

    return secs;
}