import './styles.scss';

// Mon composant Currencies va prendre en propriété `currencies` qui va être un tableau d'objet
// contenant un name et un rate
function Currencies({ currencies }) {
  return (
    <div className="currencies">
      <div className="currencies__title">
        Currencies
      </div>
      <ul className="currencies__list">
        {currencies.map((currency) => (
          // Ici le nom de la currency est unique, on va pouvoir l'utiliser comme key
          <li className="currencies__list-item" key={currency.name}>
            {currency.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Currencies;
