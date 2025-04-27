/**
 * Utilidades para manipulación de cadenas de texto
 */

/**
 * Normaliza una etiqueta para su uso en URLs:
 * 1. Convierte a minúsculas
 * 2. Normaliza caracteres acentuados (á->a, é->e, ñ->n)
 * 3. Reemplaza espacios por guiones
 * 4. Elimina caracteres especiales no deseados
 * 5. Evita guiones múltiples consecutivos
 *
 * @param tag - La etiqueta a normalizar
 * @returns La etiqueta normalizada, segura para usar en URLs
 */
export function normalizeTag(tag: string): string {
  // Mapa de reemplazo para caracteres especiales comunes en español
  const specialCharsMap: Record<string, string> = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü': 'u',
    'ñ': 'n', 'ç': 'c'
  };
  
  return tag
    .toLowerCase()
    // Primero, reemplazar caracteres específicos conocidos
    .split('')
    .map(char => specialCharsMap[char] || char)
    .join('')
    // Luego aplicar normalización estándar para cualquier otro acento
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Elimina diacríticos
    .replace(/\s+/g, "-")            // Reemplaza espacios por guiones
    .replace(/[^\w\-]/g, "")         // Elimina caracteres especiales
    .replace(/-+/g, "-");            // Evita guiones múltiples consecutivos
}
