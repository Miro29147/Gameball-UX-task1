export interface challengesDataType {
  title: string;
  date: string;
  content: string;
  frubies: number;
  points: number;
  milestones: number;
  tag: string;
  active: boolean;
}

//Static Data For Challenge Cards
//Might Also Contain Images
export const challengesData: challengesDataType[] = [
  {
    title: "Click & Collect",
    date: "12/12/2018 at 13:00",
    content:
      "It is a long established fact that a reader will be distracted by the readable eye",
    frubies: 5000,
    points: 300,
    milestones: 3,
    tag: "The Big Thing",
    active: true,
  },
  {
    title: "Click & Collect",
    date: "12/12/2018 at 13:00",
    content: "“Find what you love and let it kill you.” ― Charles Bukowski",
    frubies: 2500,
    points: 5000,
    milestones: 2,
    tag: "The Bigger Thing",
    active: false,
  },
  {
    title: "Click & Collect",
    date: "12/12/2018 at 13:00",
    content: "“All language is but a poor translation.” ― Franz Kafka",
    frubies: 6000,
    points: 2800,
    milestones: 3,
    tag: "The Big Thing",
    active: true,
  },
  {
    title: "Click & Collect",
    date: "12/12/2018 at 13:00",
    content:
      "“He who has a why to live for can bear almost any how.” ― Friedrich Nietzsche",
    frubies: 4000,
    points: 1000,
    milestones: 1,
    tag: "The Small Thing",
    active: true,
  },
  {
    title: "Click & Collect",
    date: "12/12/2018 at 13:00",
    content: "“I'll ace Gameball's technical assessment.” ― Abdelrahman Omar",
    frubies: 3000,
    points: 500,
    milestones: 99,
    tag: "The Big Thing",
    active: true,
  },
  {
    title: "Click & Collect",
    date: "12/12/2018 at 13:00",
    content:
      "“Fiction is the lie through which we tell the truth.” ― Albert Camus",
    frubies: 5500,
    points: 3000,
    milestones: 4,
    tag: "The Small Thing",
    active: false,
  },
];
