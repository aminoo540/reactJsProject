import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Box} from "@material-ui/core";
import {Button} from '@material-ui/core';
import StarRatings from 'react-star-ratings';
import {useCardStyles} from "../styles/card";

//todo to move all css inside the style file card.js to keep js clean and do like useCardStyles
export default function ComplexGrid({boatOffers}) {
    const classes = useCardStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={1}>
                    <Grid item border={0}>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt={boatOffers.title} src={boatOffers.img}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs container direction="column" spacing={1}>
                                <Grid item xs container direction="row" border={0}
                                      style={{borderColor: 'red', borderRightWidth: 2}} spacing={1}>
                                    <Grid item xs container direction="row" spacing={1}>
                                        <Box item xs direction="row" spacing={1} border={0}>
                                            {boatOffers.title}
                                            <Typography variant="body2" gutterBottom>
                                                {boatOffers.country}
                                            </Typography>
                                        </Box>
                                        <Grid item xs container direction="column" spacing={1}>
                                            <Box item color={'orange'} textAlign={'right'} border={0}>
                                                {boatOffers.views} views
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs container direction="column" spacing={1}>
                                <Grid item xs container direction="row" border={0}
                                      style={{borderColor: 'red', borderRightWidth: 2}} spacing={1}>
                                    <Grid item xs container direction="row" spacing={1}>
                                        <Box item xs direction="column" spacing={1} border={0} textAlign={'center'}>
                                            {boatOffers.length}
                                            <Typography variant="body1" gutterBottom>
                                                LENGTH
                                            </Typography>
                                        </Box>
                                        <Grid item xs container direction="column" spacing={1}>
                                            <Box item xs direction="column" spacing={1} border={0} textAlign={'center'}>
                                                {boatOffers.cabin}
                                                <Typography variant="body1" gutterBottom>
                                                    CABINS
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs container direction="column" spacing={1}>
                                            <Box item xs direction="column" spacing={1} border={0} textAlign={'center'}>
                                                {boatOffers.guests}
                                                <Typography variant="body1" gutterBottom>
                                                    GUESTS
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs container direction="column" spacing={1}>
                                            <Box item xs direction="column" spacing={1} border={0} textAlign={'center'}>
                                                <StarRatings
                                                    rating={3}
                                                    starDimension="10px"
                                                    starSpacing="2px"
                                                    starRatedColor={"yellow"}
                                                />
                                                <Typography variant="body1" gutterBottom>
                                                    {boatOffers.reviews} REVIEWS
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs container direction="column" spacing={1}>
                                <Grid item xs container direction="row" border={0}
                                      style={{borderColor: 'red', borderRightWidth: 2}} spacing={1}>
                                    <Grid item xs container direction="row" spacing={1}>
                                        <Box item xs direction="column" spacing={1} border={0}>
                                            {boatOffers.tags}
                                            <Typography style={{fontSize: 12}} fontStyle={"normal"}>SAIL
                                                TYPE: {boatOffers.sail_type}</Typography>
                                            <Typography style={{fontSize: 12}}>FREE
                                                EXTRA: {boatOffers.free_extras}  </Typography>
                                        </Box>
                                        <Grid item xs container direction="column" spacing={1}>
                                            <Box border={0} item>
                                                <Typography style={{
                                                    fontSize: 10,
                                                    textAlign: "right"
                                                }}>FROM {boatOffers.price} weekly</Typography>
                                            </Box>
                                            <Box border={0} item style={{textAlign: "right"}}>
                                                <Button color={"secondary"}>VIEW DETAILS
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}