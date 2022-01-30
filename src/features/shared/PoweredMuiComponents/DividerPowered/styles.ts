import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

type SpacingType = {
  spacingTop: number;
  spacingBottom: number;
};

//export const useStyles = makeStyles<Theme, { fileName: string; overlay: number }>({
export const useStyles = (spacing: SpacingType) =>
  makeStyles<Theme>((theme: Theme) => ({
    lineBreak: {
      marginTop: theme.spacing(spacing.spacingTop),
      marginBottom: theme.spacing(spacing.spacingBottom),
    },
  }));
