import React from 'react';

export default class UselessButton extends React.Component {

    // Défini des valeurs par défaut pour les props
    static defaultProps = { directory: 'Desktop' };

    constructor() {
        super(); // obligatoire: fait appel au constructeur parent
        
        // permet de lier l'attribut this à la fonction handleOpen
        this.handleOpen = this.handleOpen.bind(this); 
    }

    handleOpen() {
        alert(`Le répertoire ${this.props.directory} est ouvert`);
    }

    // Syntaxe Expérimentale
    handleClose = () => {
        alert(`Le répertoire ${this.props.directory} est fermé`);
    }

    handleMove() {
        alert(`Vous n'avez pas les droits nécessaire pour déplacer le répertoire ${this.props.directory}`);
    }

    render() {

        return (
            <div>
                <button onDoubleClick={this.handleOpen}>Ouvrir le répertoire</button>
                <button onClick={this.handleClose}>Fermer le répertoire</button>
                <button onClick={() => { this.handleMove() } }>Déplacer le répertoire</button>
            </div>
        )
    }
}