export type Service = {
    id:number,
    name: string;
    category: string;
    description: string;
    skills: string[];
    technologies: string[];
    projectLinks: {
      title: string;
      url: string;
    }[];
  } ;

export type ServicesContent = [{ category:string,
  services:Service[]}
 
] | [null]

export type AboutMeContent = {
  introduction:string,
  values:string,
  goals:string,
  hobbies:string,
  mission:string
} | null;
  