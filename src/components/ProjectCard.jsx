import { ArrowUpRight, Github, ExternalLink, Code2 } from "lucide-react";
export default function ProjectCard({ project, index }) {
    return (
        <article className="project-card" style={{ "--delay": `${index * 65}ms` }}>
            <div className="project-image-wrap">
                <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.classList.add("image-fallback");
                    }}
                />
                <div className="image-placeholder">
                    <Code2 size={30} />
                    <span>{project.title}</span>
                    <small>Add screenshot in public/projects</small>
                </div>
                <span className="project-category">{project.category}</span>
            </div>
            <div className="project-body">
                <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <ArrowUpRight size={19} />
                </div>
                <p>{project.description}</p>
                <div className="tag-list">
                    {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
                <div className="project-actions">
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={16} /> Source
                    </a>
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer">
                            <ExternalLink size={15} /> Live demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
