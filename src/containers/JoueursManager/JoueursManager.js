import React, {Component} from 'react';
import TitleH1 from '../../components/TitleH1/TitleH1';
import Button from '../../components/Button/Button';
import DetailsPerso from '../../components/DetailsPerso/DetailsPerso';

class JoueursManager extends Component {
    state = {
        personnage:{
            image: 1,
            force: 0,
            agilite: 0,
            intelligence: 0
        }
    }
    /*la fonction rajoute 1 à l'image pour changer de personnages tant que le chiffre vaut entre 1 et 3. */
    handleNextImage = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage}
            if(oldState.personnage.image >= 3) newPersonnage.image = 1;
            else newPersonnage.image++;
            return{ personnage: newPersonnage }
        })
    }
    handlePreviousImage = () => {
        this.setState(oldState => {
            const newPersonnage = {...oldState.personnage}
            if(oldState.personnage.image <= 1) newPersonnage.image = 3;
            else newPersonnage.image--;
            return{ personnage: newPersonnage }
        })
    }
    render() {
        return (
            <main className="container">
                <TitleH1>Créateur de personnage</TitleH1>
                <DetailsPerso {...this.state.personnage}
                    nextImage={this.handleNextImage}
                    previousImage={this.handlePreviousImage}
                />
                <div>Armes</div>
                <div className="row no-gutters">
                    <div className="col-6">
                        <Button clrBtn="btn-danger" clic={() => console.log("Réinitialiser")}>Réinitialiser</Button>
                    </div>
                    <div className="col-6">
                        <Button clrBtn="btn-success" clic={() => console.log("Créer")}>Créer</Button>
                    </div>
                </div>
            </main>
        )
    };
}

export default JoueursManager;