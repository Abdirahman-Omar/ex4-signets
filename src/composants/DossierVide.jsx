import './DossierVide.scss'; 
import { green } from '@material-ui/core/colors';

export default function DossierVide(props) {
  return (
    <article className="DossierVide" style={{backgroundColor: green}}>
      <div className="couverture">

      </div>
      <div className="info">
        <h2>Votre liste de dossiers est vide</h2>
        <p>;-(</p>
      </div>
    
    </article>
  );
}