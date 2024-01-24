import './styles.scss';

interface AmountProps {
  value: number;
  currency: string;
}
function Amount({ value, currency }: AmountProps) {
  return (
    <div className="amount">
      <p className="amount__value">{value.toFixed(2)}</p>
      <p className="amount__currency">{currency}</p>
    </div>
  );
}

export default Amount;
