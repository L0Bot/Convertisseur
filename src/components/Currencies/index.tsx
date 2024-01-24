import { useState } from 'react';
import './styles.scss';

// Je créer une interface définissant la structure d'une currency
// Je le préfixe par I pour montrer que c'est une interface (pas obligatoire)
interface ICurrency {
  name: string
  rate: number
}

// Je créer le contrat que devra respecter mon composant pour ses propriétés
interface CurrenciesProps {
  currencies: ICurrency[]
  onClickCurrency: (currency: ICurrency) => void
}

// Mon composant Currencies va prendre en propriété `currencies` qui va être un tableau d'objet
// contenant un name et un rate
function Currencies({ currencies, onClickCurrency }: CurrenciesProps) {
  // useState va permettre de définir une variable d'état.
  // useState est une fonction qui prend en paramètre la valeur initiale (ici 'Dollar')
  // useState va retourner un tableau de 2 éléments (toujours deux éléments dans le même ordre)
  // 1. dans le premier élément, on va retrouver la valeur de notre variable d'état
  // 2. dans le deuxième élément, on va retrouver une fonction
  //    nous permettant de modifier la valeur de notre variable.
  // Lorsque j'appelerai setSearch, je modifierai la valeur de search
  // et mon composant sera reexécuté
  const [search, setSearch] = useState('');

  // On calcul un tableau filtrer en fonction de la valeur de search
  const filteredCurrencies = currencies.filter(
    (currency) => currency.name.includes(search),
  );

  /**
   * Cette fonction va être appelée lorsque l'utilisateur modifier la valeur de l'input
   * Elle s'occupera de récupérer la nouvelle valeur depuis l'événement
   */
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Pour mettre à jour la valeur de search je vais
    // 1. Récupérer la nouvelle valeur de mon input depuis l'événement
    const newValue = event.target.value;
    // 2. Appeler la fonction setSearch pour mettre à jour la valeur de search
    setSearch(newValue);
  };

  return (
    <div className="currencies">
      <input
        className="currencies__search"
        type="search"
        placeholder="Rechercher une devise"
        // Je fixe une valeur à mon input
        // Elle ne se met pas à jour automatiquement
        value={search}
        // C'est à moi de mettre à jour la valeur
        // j'ajoute un eventListener onChange sur mon input
        onChange={handleChangeSearch}
      />
      <ul className="currencies__list">
        {filteredCurrencies.map((currency) => (
          // Ici le nom de la currency est unique, on va pouvoir l'utiliser comme key
          <li
            className="currencies__list-item"
            key={currency.name}
          >
            <button
              type="button"
              className="currencies__list-item-btn"
               // Quand je clique sur mon mon bouton
              onClick={() => onClickCurrency(currency)}
            >
              {currency.name}
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Currencies;
