import AppRoutesEnum from './AppRoute.enum';

export const routeExists = (routeName: string): boolean => {
  const routeKey: AppRoutesEnum | string = `${routeName}`;
  return (Object.values(AppRoutesEnum) as string[]).includes(routeKey);
};
