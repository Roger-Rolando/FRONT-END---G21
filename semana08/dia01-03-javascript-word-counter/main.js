// Obtener referencias a los elementos de la interfaz
const textArea = document.querySelector('textarea');
const charCount = document.querySelectorAll('span.text-3xl')[0];
const wordCount = document.querySelectorAll('span.text-3xl')[1];
const paragraphCount = document.querySelectorAll('span.text-3xl')[2];

// Función para contar caracteres, palabras y párrafos
function updateCounts() {
  const text = textArea.value;
  console.log('TEXTO',text); 

  // Contar caracteres
  const characters = text.length;
  console.log('TEXTO',characters);
  
  // Contar palabras (considerar cualquier espacio o salto de línea entre palabras)
  const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;

  // Contar párrafos (considerar líneas vacías como separación de párrafos)
  const paragraphs = text.trim().split(/\n+/).filter(paragraph => paragraph.length > 0).length;

  // Actualizar los contadores en la interfaz
  charCount.textContent = characters;
  wordCount.textContent = words;
  paragraphCount.textContent = paragraphs;

  console.log (updateCounts);

}
  
// Agregar evento para cuando el usuario escribe en el textarea
textArea.addEventListener('input', updateCounts);
