
/**
 * Capa de datos. Por defecto consume /pizzas.json en /public.
 * Si tu hito exige API real, cambia BASE_URL a la ruta de tu backend o API pública.
 */
const BASE_URL = '' // vacío para usar /pizzas.json local

export async function getPizzas() {
  const url = BASE_URL ? `${BASE_URL}/pizzas` : '/pizzas.json'
  const res = await fetch(url)
  if (!res.ok) throw new Error('No se pudo obtener pizzas')
  return res.json()
}
