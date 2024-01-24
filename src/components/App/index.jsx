/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import Amount from '../Amount';
import Currencies from '../Currencies';
import Header from '../Header';
import currencies from '../../data/currencies';
import './styles.scss';
import Toggler from '../Toggler';

class App extends Component {
  // Le constructeur est appelé lors de l'instanciation de la classe
  // Il est appelé lorsque l'on affiche le composant
  constructor(props) {
    super(props);

    // On initialise le state du composant
    // state n'est pas michelisable, il va contenir toutes les données de mon composant
    this.state = {
      baseAmount: 1,
      open: false,
      // Je défini dans ma variable currency la valeur par défaut
      // Cette valeur va être la première currency de mon tableau de currencies
      currency: currencies[0],
    };
  }

  // La méthode componentDidMount est appelée après le 1er rendu du composant
  // Très utile pour faire des requêtes HTTP lorsque mon composant s'affiche
  componentDidMount() {
    const { currency } = this.state;
    console.log('Exécuter au 1er montage du composant (naissance)');
    document.title = currency.name;
  }

  // La méthode componentDidUpdate est appelée à chaque fois que le composant est mis à jour
  // Appeler une API lorsque le state est modifer
  componentDidUpdate() {
    const { currency } = this.state;
    console.log('Exécuter à chaque fois que le composant est mis à jour (qu\'une donnée change)');
    document.title = currency.name;
  }

  /**
   * Méthode appeler lors du click sur une currency
   * @param {Object} currencyClicked
   */
  handleClickCurrency(currencyClicked) {
    // Je modifie la valeur de currency dans mon state avec la valeur de la currency cliqué
    this.setState({
      currency: currencyClicked,
    });
  }

  toggle() {
    // Je récupère la valeur courante de open depuis mon state
    const { open } = this.state;
    // setState va me permettre de faire deux choses :
    // 1. Modifier la valeur de open stocké dans le state
    // 2. Exécuter de nouveau la méthode render avec le state à jour
    // Résultat => le HTML va être regénéré a partir de mes données
    this.setState({
      open: !open,
    });
  }

  // La méthode render est appelée à chaque fois que le composant est mis à jour
  // (changement de donnée lié au state ou à des props)
  render() {
    console.log('App render');
    // Pour utiliser les variables stocker dans le state, on va utiliser la destructuration
    // pour aller récupérer les informations qui nous intéresse
    const { open, baseAmount, currency } = this.state;
    return (
      <div className="app">
        {/* Équivalent à {Header({ baseAmount: 50 })} */}
        <Header baseAmount={baseAmount} />
        {/* Affichage conditionnel, si open === true => currencies va s'afficher,
        sinon il sera retirer du DOM */}
        <Toggler
          // ATTENTION, quand on utilise une fonction de callback, la fonction passé perd le `this`
          // Pour éviter ce désagrément, on va utiliser une fonction fléché
          // qui s'occupera d'appeler notre méthode
          // le this. permet d'appeler la méthode toggle de notre class App
          onClickToggle={() => this.toggle()}
          open={open}
        />
        {open && (
        <Currencies
          currencies={currencies}
          onClickCurrency={(currencyClicked) => this.handleClickCurrency(currencyClicked)}
        />
        )}
        <Amount
          value={currency.rate}
          // Les accolades ne sont pas utile quand on passe une chaine de caractère
          currency={currency.name}
        />
      </div>
    );
  }
}

export default App;
