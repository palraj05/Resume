
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import { useNavigate  } from "react-router-dom";
import Logo from "./Logo";
// import PersistentDrawerLeft from "./DrawerToggle";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


function NavMenu(props) {



  const navStyle =  {
    color:"white"
  };
  console.log("props", props);

  const navigate = useNavigate();

  const homePage= () => {
    navigate('/');
};
 
  return (
    <div className="navs">
    {/* <PersistentDrawerLeft /> */}
      <nav style={{flex:".2`", display:"flex"}}>
        <div style={{paddingLeft:"20px"}}>
<DensityMediumIcon />
</div>
     <div  
     
     style={{paddingRight:"10px"}}>

      <Logo onClick= {
        homePage}  />     
   </div>
   
     
        <h2 
        onClick={homePage}
        style={{flexDirection:"row",flex:".5",display:"flex", alignItems:"center", cursor:"pointer"}}>        
        Curriculum Vitae</h2>
       
      
        <ul className="nav-links" style={{flex:".5"}}>

          <NavLink to="/about" style={navStyle}>
            <li>About</li>
          </NavLink>

          <NavLink to="/resume" style={navStyle}>
            <li>Resume</li>
          </NavLink>

          <NavLink to="/contact"  style={navStyle}>
            <li>Contact</li>
          </NavLink>

        </ul>
       
      </nav>
      </div>
  );
}

export default NavMenu;
