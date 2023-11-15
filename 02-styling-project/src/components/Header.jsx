import logo from '../assets/logo.png';
import classes from './Header.module.css'; // This import does not mean that the styles inside of it are only available on this component

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    </header>
  );
}
