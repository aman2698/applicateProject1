import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {data} from "./data"
const Row1 = (props) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing="2">
            <Grid key="0" item>
              <Card className="">
                <CardContent>
                  <Typography variant="body2" component="p">
                    Today's order - {data.todayOrder}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Current Week Order - {data.currentWeekOrder}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid key="1" item>
              <Card className="">
                <CardContent>
                  <Typography variant="body2" component="p">
                    Today's order amount - {data.todayOrderAmount}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Current Week amount - {data.currentWeekAmount}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid key="2" item>
              <Card className="">
                <CardContent>
                  <Typography variant="body2" component="p">
                   MTD order - {data.MTDorder}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Last Month Order - {data.lastMonthOrder}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid key="3" item>
              <Card className="">
                <CardContent>
                  <Typography variant="body2" component="p">
                    MTD order amount - {data.MTDorderAmount}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Last month amount - {data.lastMonthAmount}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Row1.propTypes = {};

export default Row1;
