import { useLocation } from "react-router-dom"
import { projectsData } from "../../assets/assets"
import Slick from "./slick"
import Title from "./Title"

const Project = () => {
    const location = useLocation()
    const isProjects = location.pathname.startsWith('/projects');
    return (
        <>
            <section>
                {!isProjects && <Title title="Projects" subtitle="Completed" text="Crafting Spaces, Building Legacies—Explore Our Portfolio" />}
                <div className="container mt-9" data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0">
                    <Slick eles={projectsData}/>
                </div>
            </section>
        </>
    )
}

export default Project;