import {
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  TextField,
  InputAdornment,
  Input,
  Box,
  styled,
} from '@mui/material'
import React from 'react'
import { VscAccount } from 'react-icons/vsc'
import { RiLockPasswordLine } from 'react-icons/ri'
import DivStyles from './DivStyles'
const LoginComp = () => {
  const Styles = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '2px solid black',
  })

  return (
    <>
      <DivStyles>
        <DivStyles>
          <Card
            sx={{
              container: 'container',
              width: '300px',
              height: '250px',
              padding: '10px',
              margin: '30px',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Login here</Typography>
            <CardContent>
              <Grid container spacing={4}>
                <Grid xs={12} item>
                  <Input
                    startAdornment={
                      <InputAdornment position='start'>
                        <VscAccount />
                      </InputAdornment>
                    }
                    variant='outlined'
                    type='text'
                    placeholder='Username'
                    fullWidth
                    required
                  ></Input>
                </Grid>
                <Grid xs={12} item>
                  <Input
                    startAdornment={
                      <InputAdornment position='start'>
                        <RiLockPasswordLine />
                      </InputAdornment>
                    }
                    variant='outlined'
                    type='text'
                    placeholder='Password'
                    fullWidth
                    required
                  ></Input>
                </Grid>
                <Grid xs={12} item>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </DivStyles>

        <DivStyles>
          <Card
            sx={{
              width: '300px',
              height: '500px',
              padding: '10px',
              margin: '30px',
              border: '1px solid black',
            }}
          >
            <Typography sx={{ textAlign: 'center' }}>Login here</Typography>
            <CardContent>
              <Grid container spacing={2}>
                <Grid xs={12} item>
                  <Input
                    startAdornment={
                      <InputAdornment position='start'>
                        <VscAccount />
                      </InputAdornment>
                    }
                    variant='outlined'
                    type='text'
                    placeholder='Username'
                    fullWidth
                    required
                  ></Input>
                </Grid>
                <Grid xs={12} item>
                  <Input
                    startAdornment={
                      <InputAdornment position='start'>
                        <RiLockPasswordLine />
                      </InputAdornment>
                    }
                    variant='outlined'
                    type='text'
                    placeholder='Password'
                    fullWidth
                    required
                  ></Input>
                </Grid>
                <Grid xs={12} item>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </DivStyles>
      </DivStyles>
    </>
  )
}

export default LoginComp
