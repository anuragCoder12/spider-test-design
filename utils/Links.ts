type navType = {
  link: string;
  path: string;
};
type cardType = {
    title:string
}

export const navLinks: navType[] = [
  {
    link: "Learn",
    path: "/learn",
  },
  {
    link: "How do I participate?",
    path: "/participate",
  },
  {
    link: "Universities",
    path: "/universities",
  },
  {
    link: "Corporate",
    path: "/corporate",
  },
];
export const cardComponent:cardType[] = [
  {
    title: "Elibility",
  },
  {
    title: "F1 Visa Students",
  },
  {
    title: "Universities",
  },
  {
    title: "Admission",
  },
  {
    title: "Companies",
  },
  {
    title: "Jobs",
  },
];
