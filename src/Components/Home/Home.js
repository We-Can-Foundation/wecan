import React, {useEffect} from "react";
import BlogList from "../Eduaction/BlogList";
import FeaturedBlog from "./FeaturedBlog";

const Home = (props) => {
    let name = ""
    useEffect(() => {
        props.setIndex(0);
    });
    let topAreaStyle = {height: "10%"}

    return (
        <div className={"homeCont"}>
            <div style={topAreaStyle} className={"topArea homeTopArea"}>
                <div className={"firstRowCont"}>
                    <h2 style={{width: "400px"}}>Buen día {name}</h2>
                </div>
            </div>
            <div className={"homeContent"}>
                <div className={"homeColumnBox01"}>
                    <div className={"homeSectionCard"}>
                        <h2>Noticias</h2>
                        <p>Últimas noticias en psicología, salud mental y emocional.</p>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/wecanfirebase-fa37e.appspot.com/o/Icons%2Fnewspaper.png?alt=media&token=d74cd7e5-d5cd-4fad-b2e6-eb77075880a0"}/>
                    </div>
                    <div className={"homeSessionsCard"}>
                        <h2>Tus sesiones</h2>
                        <p>Tu historial sesiones de terapia agendadas, tomadas y proximas</p>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/wecanfirebase-fa37e.appspot.com/o/Icons%2Fmental-disorder.png?alt=media&token=7a4553d3-b3db-47f3-ad76-abb4dba31f83"}/>
                    </div>
                </div>
                <div className={"homeColumnBox02"}>
                    <div className={"homeCommonCards"}>
                        <h2>Blogs y artículos</h2>
                        {BlogList.map(item => {
                            return (
                                <FeaturedBlog content={item} setBlog={props.setBlog}/>
                            )
                        })}
                    </div>
                    <div className={"homeCommonCards"}>
                        <h2>Actividades</h2>
                        <p>Actividades que más se adaptan a tu perfil</p>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/wecanfirebase-fa37e.appspot.com/o/Icons%2Fdemonstration.png?alt=media&token=46100c06-ccac-4694-81c0-bbd02a41fa21"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;