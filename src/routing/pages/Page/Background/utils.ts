import { randomIntFromRange } from '../../../../common/utils';
import BattlePlanImage from '../../../../assets/images/backgrounds/battle-plan.jpg';
import FootballBoardImage from '../../../../assets/images/backgrounds/football-board.jpg';
import WarPlanesImage from '../../../../assets/images/backgrounds/war-planes.jpg';

const backgrounds = [
  { fileName: BattlePlanImage, overlay: 0.85 },
  { fileName: FootballBoardImage, overlay: 0.8 },
  { fileName: WarPlanesImage, overlay: 0.8 },
];

export const getRandomBackgroundConfig = () => backgrounds[randomIntFromRange(0, backgrounds.length - 1)];
