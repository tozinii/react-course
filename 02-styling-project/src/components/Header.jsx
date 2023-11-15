import logo from '../assets/logo.png';
import './Header.css'; // This import does not mean that the styles inside of it are only available on this component

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p style={{color:'red','text-align':'left',backgroundColor:'black'}}>A community of artists and art-lovers.</p>
    </header>
  );
}
