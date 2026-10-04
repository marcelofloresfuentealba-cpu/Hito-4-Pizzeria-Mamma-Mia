
import { useEffect, useMemo, useState } from 'react'
import { getPizzas } from '../services/api.js'
import PizzaCard from '../components/PizzaCard.jsx'

export default function Home() {
  const [pizzas, setPizzas] = useState([])     // data
  const [loading, setLoading] = useState(true) // estado de carga
  const [error, setError] = useState('')       // mensaje de error
  const [q, setQ] = useState('')               // búsqueda simple

  useEffect(() => {
    // Carga inicial de datos desde /pizzas.json (o API real si cambias la URL en api.js)
    (async () => {
      try {
        const data = await getPizzas()
        setPizzas(data)
      } catch (e) {
        setError(e.message || 'Error al cargar datos')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return pizzas
    return pizzas.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.ingredients.some(ing => ing.toLowerCase().includes(term))
    )
  }, [q, pizzas])

  if (loading) return <div className="container"><p>Cargando…</p></div>
  if (error) return <div className="container"><p>Ups: {error}</p></div>

  return (
    <main className="container" style={{ display: 'grid', gap: 16 }}>
      <h1>Pizzas</h1>
      <div className="row">
        <input
          className="input"
          placeholder="Buscar por nombre o ingrediente…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button className="btn" onClick={() => setQ('')}>Limpiar</button>
      </div>

      <p>{filtered.length} resultado(s)</p>

      {filtered.length === 0 ? (
        <p>No hay coincidencias con “{q}”.</p>
      ) : (
        <section className="grid">
          {filtered.map(p => <PizzaCard key={p.id} pizza={p} />)}
        </section>
      )}
    </main>
  )
}
