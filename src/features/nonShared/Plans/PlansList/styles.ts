import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { commonColors } from 'common/commonStyles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  listContainer: {
    marginTop: theme.spacing(6),
  },
  listItem: {
    margin: `${theme.spacing(1)} 0`,
    backgroundColor: commonColors.paperBackGroundColor,
    minHeight: '50px',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  listItemContents: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  listItemAvatar: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  listItemButtonsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    minWidth: '100px',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: theme.spacing(1),
      width: '100%',
      minWidth: '0px',
      justifyContent: 'center',
    },
  },
  listItemButton: {
    margin: theme.spacing(1),
  },
}));

export const sxStyles = { plansList: { width: '100%', maxWidth: 900 } };
