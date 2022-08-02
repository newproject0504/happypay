export type Home = {
  mainContent: string;
  cards?: [HomeCard, HomeCard, HomeCard];
  cardsJSON: string;
}

export type HomeCard = {
  content: string;
  image: string;
  position: number;
  title: string;
}
