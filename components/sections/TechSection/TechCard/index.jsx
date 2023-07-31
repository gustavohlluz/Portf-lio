



export const TechCard = ({technologie}) => {
    return (
        <li>
            <img src={technologie.img} alt={technologie.name} />
            <h3>{technologie.name}</h3>
        </li>
    )
}