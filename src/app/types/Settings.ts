import Display from './Display';

export default interface Settings {
  title: string;
  subtitle: string;
  otherLoadAll: boolean;
  tilesVisible: number;
  selectedDisplay: string;
  displays: Display[];
}
