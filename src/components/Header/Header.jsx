import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
   return (
      <header className={css.header}>
         <nav className={css.navBar}>
            <div>Kewl Logo</div>
            <div className={css.navLinks}>
               <NavLink to="/" 
                  end={true}
                  className={({isActive}) => (isActive ? css.active : css.link)}>Home</NavLink>
               <NavLink to="/movies" 
                  end={true}
                  className={({isActive}) => (isActive ? css.active : css.link)}>Movies</NavLink>
            </div>
         </nav>
      </header>
   );   
}