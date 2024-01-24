import './styles.scss';

interface HeaderProps {
  baseAmount: number;
}
function Header({ baseAmount }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__title">Convertisseur</h1>
      <p className="header__amount">
        {`${baseAmount} euro${baseAmount > 1 ? 's' : ''}`}
      </p>
    </header>
  );
}

export default Header;
