



export const ProjectCard = ({project}) => {
    return (
        <li>
            <img src={project.img} alt={project.name} />
            <h3>{project.name}</h3>
        </li>
    )
}