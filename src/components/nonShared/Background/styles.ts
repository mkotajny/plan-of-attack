import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme, { fileName: string; overlay: number }>({
  paperContainer: {
    background: ({ overlay, fileName }) => `
    linear-gradient(
      rgba(0, 0, 0, ${overlay}),
      rgba(0, 0, 0, ${overlay})
    ),
    url(${fileName}) center/cover no-repeat `,
    height: '100vh',
  },
});
