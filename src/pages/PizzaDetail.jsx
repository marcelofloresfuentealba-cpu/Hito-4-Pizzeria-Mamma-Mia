
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPizzas } from '../services/api.js'

export default function PizzaDetail() {
  const { id } = useParams()
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const data = await getPizzas()       // simple: reutilizamos la misma fuente
        const found = data.find(p => String(p.id) === String(id))
        if (!found) throw new Error('Pizza no encontrada')
        setPizza(found)
      } catch (e) {
        setError(e.message || 'Error al cargar detalle')
      } finally {
        setLoading(false)
      }
    })()
  }, [id])

  if (loading) return <div className="container"><p>Cargando…</p></div>
  if (error) return <div className="container"><p>Ups: {error}</p></div>

  return (
    <main className="container detail">
      <img className="hero" src={pizza.img} alt={pizza.name} />
      <section style={{display: 'grid', gap: 12}}>
        <h1>{pizza.name}</h1>
        <p>{pizza.desc}</p>
        <div className="row" style={{flexWrap: 'wrap'}}>
          {pizza.ingredients.map((ing) => (
            <span key={ing} className="badge">{ing}</span>
          ))}
        </div>
        <p className="price" style={{fontSize: 22}}>${pizza.price.toLocaleString('es-CL')}</p>
        <div className="row">
          <Link className="btn" to="/">← Volver</Link>
        </div>
      </section>
    </main>
  )
}
