import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Warning from '@material-ui/icons/Warning';
import PropTypes from 'prop-types';
import fetchFoaas from './lib/fetchFoaas';

function FoaasCard(props) {
  const [foaasData, setFoaasData] = useState({ message: true, subtitle: true });
  const [loading, isLoading] = useState(true);

  const {
    type,
    from,
    classes,
    raised,
    darkMode,
    subtitleStyles,
    middleFinger,
    middleFingerStyles,
  } = props;

  const cardStyles = makeStyles({
    card: {
      minWidth: 275,
      maxWidth: 300,
      backgroundColor: darkMode && '#1f1f1f',
      color: darkMode && 'white',
    },
    title: {
      fontSize: '14',
    },
    pos: {
      marginBottom: 12,
    },
  });

  useEffect(() => {
    async function fetchData() {
      const data = await (fetchFoaas({ type, from }));
      setFoaasData(data);
      isLoading(false);
    }
    fetchData();
  }, [type, from]);

  return (
    <div className="FoaasCard">
      <Card className={classes.card ? makeStyles(classes).card : cardStyles().card} raised={raised}>
        <CardContent>
          {loading && <CircularProgress />}
          <Typography className={cardStyles().title} variant="h4" component="h2">
            <div>
              {foaasData.message || <Warning color="error" fontSize="large" />}
            </div>
          </Typography>

          <Typography variant="body2" component="p">
            <br />
            {foaasData.subtitle && <span style={subtitleStyles}>{foaasData.subtitle}</span>}
            {middleFinger && <span styles={middleFingerStyles} role="img" aria-label="middle-finger">🖕</span>}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

FoaasCard.defaultProps = {
  type: 'because',
  from: 'a react component',
  classes: false,
  raised: true,
  darkMode: false,
  subtitleStyles: {
    fontWeight: 'lighter',
    fontStyle: 'italic',
  },
  middleFinger: true,
  middleFingerStyles: {
    fontSize: '30px',
  },
};

FoaasCard.propTypes = {
  type: PropTypes.string,
  from: PropTypes.string,
  classes: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  raised: PropTypes.bool,
  darkMode: PropTypes.bool,
  subtitleStyles: PropTypes.object,
  middleFinger: PropTypes.bool,
  middleFingerStyles: PropTypes.object,
};

export default FoaasCard;
