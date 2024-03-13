import styles from "./style.module.css"



export const ProjectCard = ({project}) => {
    return (
        <li >
            <div className={styles.flexBox}>
            <div className={styles.flexBox}>
            <a href={project.link}>
            <img className={styles.Icon} src={project.img} alt={project.name} />
            <p>{project.description}</p>
            <h3 className={styles.Title}>{project.name}</h3></a>
            </div>
          <div className={styles.flexBoxCenter}>
          <a href={project.page}>Demonstração</a>
          </div>
            </div>
           
           
        </li>
    )
}