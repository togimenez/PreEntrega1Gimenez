import "./StylesNavbar.css";
import { NavLink } from 'react-router-dom'
import AirMaxCommand from '../assets/img/AirMaxCommand.jpg';
import Barricade from '../assets/img/Barricade.jpg'
import Courtijam from '../assets/img/Courtijam.png'
import BmwElectron from '../assets/img/BmwElectron.jpg';
import Galaxy6 from '../assets/img/Galaxy6.jpg'
import Nanox3 from '../assets/img/Nanox3.jpg'


function Catalogo () { 
    return(
        <div className="contenedor-catalogo">
            <div className="card" style={{ width: "18rem" }}>
            <img src={AirMaxCommand} className="card-img-top" alt="foto de air 95"/>
                <div className="card-body">
                    <h5 className="card-title">AirMaxCommand</h5>
                    <p className="card-text">
                        Marca: Nike / Tipo de producto: Zapatillas
                        Disciplina:	Moda / Color:  Negro
                        Género:	Hombre / Material: Cuero Natural</p>
                    <NavLink to="/informacion" className="btn btn-primary">Mas Info talle</NavLink>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
            <img src={BmwElectron} className="card-img-top" alt="foto de air 95"/>
                <div className="card-body">
                    <h5 className="card-title">BmwElectron</h5>
                    <p className="card-text">
                        Marca:	Puma / Tipo de producto:  Zapatillas
                        Disciplina : Moda / Color:	Blanco / 
                        Género:	Unisex / Material:	Poliéster
                    </p>
                    <NavLink to="/informacion" className="btn btn-primary">Mas Info talles</NavLink>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
            <img src={Barricade} className="card-img-top" alt="foto de air 95"/>
                <div className="card-body">
                    <h5 className="card-title">Barricade</h5>
                    <p className="card-text">
                        Marca:	Adidas / Tipo de producto:  Zapatillas
                        Disciplina:	Tenis / Color:	Blanco
                        Género:	Hombre / Material:	Materiales reciclados
                    </p>
                    <NavLink to="/informacion" className="btn btn-primary">Mas info talles</NavLink>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
            <img src={Nanox3}className="card-img-top" alt="foto de air 95"/>
                <div className="card-body">
                    <h5 className="card-title">Nanox3</h5>
                    <p className="card-text">
                        Marca:  Reebok / Tipo de producto: Zapatillas
                        Disciplina:  Training / Color:  Negro
                        Género: Unisex / Material:  Poliéster
                    </p>
                    <NavLink to="/informacion" className="btn btn-primary">Mas Info talle</NavLink>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
            <img src={Courtijam} className="card-img-top" alt="foto de air 95"/>
                <div className="card-body">
                    <h5 className="card-title">Courtijam</h5>
                    <p className="card-text">
                        Marca:	Adidas / Tipo de producto:  Zapatillas
                        Disciplina:	Tenis / Color:	Blanco
                        Género:	Hombre / Material:	Materiales reciclados
                    </p>
                    <NavLink to="/informacion" className="btn btn-primary">Mas Info talles</NavLink>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
            <img src={Galaxy6} className="card-img-top" alt="foto de air 95"/>
                <div className="card-body">
                    <h5 className="card-title">Galaxy6</h5>
                    <p className="card-text">
                        Marca:	Adidas / Tipo de producto:	Zapatillas
                        Disciplina:	Running / Color:	Negro
                        Género:	Mujer / Material:	Materiales reciclados
                    </p>
                    <NavLink to="/informacion" className="btn btn-primary">Mas info talles</NavLink>
                </div>
            </div>
        </div>
        
        
    )
}

export default Catalogo;
