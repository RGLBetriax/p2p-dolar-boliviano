import NavBar from "../NavBar/NavBar";
import geo from '../../assets/imgs/geometric.png'

const Home = () => {
    return (
        <div className="bg-lavender h-screen">
            <NavBar/>
            <h1 className="text-yellow">home</h1>
            
            {/* <img src={geo} alt="" className="opacity-25 relative h-50"/> */}
        </div>
    );
}
 
export default Home;