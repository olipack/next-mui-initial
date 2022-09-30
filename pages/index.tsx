import type { NextPage } from 'next'

import { Card, CardHeader, Grid } from '@mui/material'
import { Layout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid item>
          <Card>
            <CardHeader title="Pendientes"></CardHeader>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
