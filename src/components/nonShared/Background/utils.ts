import { randomIntFromRange } from '../../../common/utils/utils';
import BattlePlanImage from '../../../assets/images/battle-plan.jpg';
import FootballBoardImage from '../../../assets/images/football-board.jpg';
import WarPlanesImage from '../../../assets/images/war-planes.jpg';

const backgrounds = [
  { fileName: BattlePlanImage, overlay: 0.85 },
  { fileName: FootballBoardImage, overlay: 0.8 },
  { fileName: WarPlanesImage, overlay: 0.8 },
];

export const getRandomBackgroundConfig = () => backgrounds[randomIntFromRange(0, backgrounds.length - 1)];
