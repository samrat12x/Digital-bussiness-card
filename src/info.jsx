import  pic from "./assets/pic.png" 

export default function info(){
    return (<>
    <img  className="pic" src={pic} alt="profile pic" />
    <h2>Samrat Patel</h2>
    <h5>Fullstack developer</h5>
    </>
    )
}