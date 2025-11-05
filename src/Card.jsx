export default function Card({cardTitle, cardText, isSelected}) {
  return (
    <div className="card">
      <h5 className="card-header">{cardTitle}</h5>
      <div className="card-body">
        <p className="card-text">
          {isSelected === null ? ('ATTENZIONE! Nessun linguaggio selezionato!'): (cardText) }
        </p>
      </div>
    </div>
  );
}