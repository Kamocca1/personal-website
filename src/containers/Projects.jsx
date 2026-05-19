import { Badge } from "@/components/ui/badge";
import { ProjectData } from "@/utils/helper";

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full h-auto md:min-h-screen pt-24 container mx-auto px-6 relative space-y-12"
        >
            <h2 className="text-xl md:text-2xl text-center font-bold text-neutral-800 uppercase">
                Recent Projects
            </h2>

            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:gap-4 md:gap-8 lg:gap-12">
                    {ProjectData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-2">
            <div className="aspect-video rounded-md overflow-hidden flex items-center justify-center border-4 border-neutral-200">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full flex items-center justify-between">
                <p className="font-semibold text-sm text-neutral-600">
                    {project.title}
                </p>

                <div className="flex items-center justify-center gap-2">
                    {project.techStacks.slice(0, 2).map((tech, index) => (
                        <Badge variant="secondary" key={index}>
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
