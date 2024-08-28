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

export type Services = [{ category:string,
  services:Service[]}
 
] | [null]
  