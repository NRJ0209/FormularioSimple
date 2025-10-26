import { useState } from 'react'
import { Stack, Typography, Avatar, Button } from '@mui/material'
import Ficha from './components/Ficha'
import FormRegistro from './components/FormRegistro'
import kira from './assets/kira.jpeg'

function App() {
  // Estado para los animales registrados
  const [animales, setAnimales] = useState([])

  // Estado para el contador de acariciadas
  const [count, setCount] = useState(0)

  // Función para agregar un nuevo animal a la lista
  const handleRegister = (newAnimal) => {
    setAnimales((prev) => [...prev, newAnimal])
  }

  return (
    <Stack
      direction="column"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', p: 3 }}
    >
      {/* Título */}
      <Typography variant="h3" sx={{ color: '#333', textAlign: 'center' }}>
        Soy un perrito feliz
      </Typography>

      {/* Imagen de Kira */}
      <Avatar alt="imagen de Kira" src={kira} sx={{ width: 150, height: 150 }} />

      {/* Contador de acariciadas */}
      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => setCount((count) => count + 1)}
      >
        Me has acariciado {count} veces
      </Button>

      {/* Formulario para registrar datos */}
      <FormRegistro onRegister={handleRegister} />

      {/* Lista de animales registrados (solo ficha, sin imagen) */}
      <Stack spacing={2} sx={{ mt: 2, width: '100%', maxWidth: 400 }}>
        {animales.map((animal, index) => (
          <Ficha key={index} name={animal.name} breed={animal.breed} />
        ))}
      </Stack>
    </Stack>
  )
}

export default App
