
import { Link } from 'react-router-dom'

export default function PizzaCard({ pizza }) {
  return (
    <article className="card">
      <img src={pizza.img} alt={pizza.name} />
      <div className="card-body">
        <h3>{pizza.name}</h3>
        <div className="row" style={{flexWrap: 'wrap'}}>
          {pizza.ingredients.map((ing) => (
            <span key={ing} className="badge">{ing}</span>
          ))}
        </div>
        <div className="row" style={{justifyContent: 'space-between'}}>
          <span className="price">${pizza.price.toLocaleString('es-CL')}</span>
          <Link to={`/pizza/${pizza.id}`} className="btn">Ver detalle</Link>
        </div>
      </div>
    </article>
  )
}
