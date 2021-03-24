import './Dossier.scss'; 
import { IconButton } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from 'react';
import CouvertureDefaut from "../images/couverture.webp"


export default function Dossier({id, nom, couleur, datemodif, couverture}) {

  const [anchor, setAnchor] = useState(null);
  
  const ouvrirMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const fermerMenu = (event) => {
    setAnchor(null);
  };

  return (
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton  className="deplacer" aria-label="déplacer" disableRipple={true}>
          <SortIcon></SortIcon>
        </IconButton>
        <img src={couverture ? couverture : CouvertureDefaut  } alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <p>Modifié : {formaterDate(datemodif)}</p>
      </div>
      <IconButton onClick={ouvrirMenu} className="modifier" aria-label="modifier" size="small">
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchor} keepMounted open={Boolean(anchor)} onClose={fermerMenu}>
            <MenuItem onClick={fermerMenu} >Modifier</MenuItem>
            <MenuItem onClick={fermerMenu}>Supprimer</MenuItem>
      </Menu>
    </article>
  );
}

/**
 * Formate les objets date de Firestore et retourne une chaîne de caractères
 * @param {Object} d Objet date retourné par Firestore
 * @returns String date formatée en français
 */
function formaterDate(d) {
  const dateJs = d ? new Date(d.seconds*1000) : new Date();
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${dateJs.getDate()} ${mois[dateJs.getMonth()]} ${dateJs.getFullYear()}`;
}