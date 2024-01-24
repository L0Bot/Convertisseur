import './styles.scss';

interface TogglerProps {
  // onClickToggle est une fonction qui retourne rien
  onClickToggle: () => void
  open: boolean
}

// onClickToggle est une fonction est passé à mon composant
// mon composant Toggler l'exécutera lorsque l'utilisateur clickera sur le bouton
function Toggler({ onClickToggle, open }: TogglerProps) {
  // SI ma variable open est à vrai, j'affichera les class toggler et toggler--open
  // SINON j'affichera que la class `toggler`
  const cssClassName = open ? 'toggler toggler--open' : 'toggler';

  return (
    <button
      type="button"
      className={cssClassName}
      onClick={onClickToggle}
    >
      =
    </button>
  );
}

export default Toggler;
