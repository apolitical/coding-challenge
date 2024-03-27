export interface Context {
  instance: {
    dataValues: {
      favourites?: string[];
      favouritesDetails?: any[];
    };
  };
  continue: string;
}
