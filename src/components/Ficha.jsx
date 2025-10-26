import { Card, CardContent, Typography, Stack } from '@mui/material'

function Ficha({ name, breed }) {
  return (
    <Card sx={{ width: '90%', maxWidth: 400, boxShadow: 3, borderRadius: 2, p: 2 }}>
      <CardContent>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h5" textAlign="center">
            Ficha del Animal
          </Typography>
          {name || breed ? (
            <>
              <Typography variant="body1"><strong>Nombre:</strong> {name}</Typography>
              <Typography variant="body1"><strong>Raza:</strong> {breed}</Typography>
            </>
          ) : (
            <Typography variant="body2" color="text.secondary">
              Aún no se ha registrado ningún animal.
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default Ficha
