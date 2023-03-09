import Switch from '@mui/material/Switch';

const NavBar = () => {
    return (
        <nav>
            {/* <h1 className="text-red">nav</h1> */}
            <Switch defaultChecked />
            <button className="bg-yellow rounded-xl text-black font-bold px-2 py-1 text-sm">Suscribite</button>
        </nav>
    );
}
 
export default NavBar;