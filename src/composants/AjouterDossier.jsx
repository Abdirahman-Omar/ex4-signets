import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';

import "./AjouterDossier.scss";

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#532169');

  const couleursParDefaut = ["#5D2B7D","#A72D89","#1474BB","#8FC33E","#FEEE22","#E41E26"];

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}
          />
          <TextField
            margin="normal"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide" 
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            color={couleur}
            colors={couleursParDefaut} //Verts, jaunes, orange, brun, rouge bleu
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setOuvert(false); viderChamps()}} color="primary" style={{color:"white",backgroundColor:"darkred", padding:"7px 15px", margin:"10px"}}>
            Annuler
          </Button>
          <Button onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} color="primary" style={{color:"white",backgroundColor:"green",padding:"7px 15px", margin:"10px"}}>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}