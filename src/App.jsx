import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

}));

const App = () => {
    return(
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxWidth='sm'>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom >
                        Photo Album
                    </Typography>
                    <Typography variant='h6'align='center' color='textSecondary' paragraph >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor blanditiis voluptas illo neque voluptatum ipsam excepturi animi odio nesciunt, dolorem aspernatur quidem inventore earum temporibus porro ipsa cum consequuntur?
                    </Typography>
                    <div>
                        <Grid container spacing={2} justify='center' >
                            <Grid item>
                                <Button variant='contained' color='primary'>
                                    See My Photos!
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' color='primary'>
                                    Secondary Button
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </main>
        </>
    );
}

export default App;