import Display from './Display';
import { Tile } from './Tile';

export default interface Settings {
  title: string;
  subtitle: string;
  otherLoadAll: boolean;
  tilesVisible: number;
  selectedDisplay: string;
  displays: Display[];
}
