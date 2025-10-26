import { useState } from 'react'
import { Card, CardContent, Typography, Stack, TextField, Button } from '@mui/material'

function FormRegistro({ onRegister }) {
  const [data, setData] = useState({ name: '', breed: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (data.name.trim() && data.breed.trim()) {
      onRegister(data)
      setData({ name: '', breed: '' })
    } else {
      alert('Por favor completa todos los campos.')
    }
  }

  return (
    <Card sx={{ width: '90%', maxWidth: 400, boxShadow: 3, borderRadius: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h5" textAlign="center" sx={{ mb: 2 }}>
          Registro de Animal 
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Nombre"
              name="name"
              value={data.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Raza"
              name="breed"
              value={data.breed}
              onChange={handleChange}
              fullWidth
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: '#2e7d32', '&:hover': { backgroundColor: '#1b5e20' } }}
            >
              Registrar
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormRegistro

