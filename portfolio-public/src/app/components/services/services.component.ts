import { Component, OnInit } from '@angular/core';
import { Service, Services } from '../models/models';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  services: Service[] = [
    {
      id: 1,
      "name": "Frontend Development",
      "category": "Web Development",
      "description": "Design and implement user interfaces with a focus on creating responsive and user-friendly experiences using modern technologies.",
      "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Angular",
        "React"
      ],
      "technologies": [
        "Angular",
        "React",
        "Bootstrap",
        "SASS",
        "SCSS"
      ],
      "projectLinks": [
        {
          "title": "In Person Payment Solution (IPS) Project",
          "url": "https://github.com/diegohernandez/ips-project"
        },
        {
          "title": "Enterprise Center Reporting (ECR) Project",
          "url": "https://github.com/diegohernandez/ecr-project"
        }
      ]
    },
    {
      id: 2,
      "name": "Backend Development",
      "category": "Web Development",
      "description": "Develop and maintain backend systems, ensuring reliable and secure communication between servers and user interfaces.",
      "skills": [
        "Java",
        "Spring Boot",
        "Node.js",
        "C#",
        "SQL"
      ],
      "technologies": [
        "Spring Boot",
        "Node.js",
        "WebSphere",
        "ASP.NET",
        "SQL Server"
      ],
      "projectLinks": []
    },
    {
      id: 3,
      "name": "Data Engineering",
      "category": "Data Management",
      "description": "Design and implement data pipelines, data transformation, and reporting solutions using modern data engineering practices.",
      "skills": [
        "SQL",
        "Python",
        "Azure Data Factory",
        "Power BI",
        "Databricks"
      ],
      "technologies": [
        "Azure Data Factory",
        "Power BI",
        "Databricks",
        "SQL Server"
      ],
      "projectLinks": [
        {
          "title": "RITS Data Transformation Project",
          "url": "https://github.com/diegohernandez/rits-data-transformation"
        }
      ]
    },
    {
      id: 4,
      "name": "Legacy System Migration",
      "category": "Software Development",
      "description": "Migrate legacy systems to modern architectures, enhancing performance, security, and scalability while maintaining existing functionality.",
      "skills": [
        "Java EE",
        "Struts",
        "Spring Boot",
        "Angular"
      ],
      "technologies": [
        "Spring Boot",
        "Angular",
        "Thymeleaf",
        "Tomcat"
      ],
      "projectLinks": [
        {
          "title": "Legacy System Migration to Spring Boot",
          "url": "https://github.com/diegohernandez/legacy-migration"
        }
      ]
    },
    {
      id: 5,
      "name": "Database Management",
      "category": "Data Management",
      "description": "Design, manage, and optimize databases to support various applications and ensure efficient data storage and retrieval.",
      "skills": [
        "SQL Server",
        "MongoDB",
        "Oracle",
        "JDBC"
      ],
      "technologies": [
        "SQL Server",
        "MongoDB",
        "Oracle",
        "JDBC"
      ],
      "projectLinks": [
        {
          "title": "Database Optimization Project",
          "url": "https://github.com/diegohernandez/db-optimization"
        }
      ]
    },
    {
      id: 5,
      "name": "Full-Stack Development",
      "category": "Web Development",
      "description": "Provide end-to-end development services for web applications, from frontend to backend, ensuring seamless integration and robust performance.",
      "skills": [
        "JavaScript",
        "Java",
        "Spring Boot",
        "React",
        "SQL"
      ],
      "technologies": [
        "Angular",
        "Spring Boot",
        "React",
        "SQL Server"
      ],
      "projectLinks": [
        {
          "title": "Full-Stack Web Application",
          "url": "https://github.com/diegohernandez/full-stack-web-app"
        }
      ]
    }
  ]

  categories:string[]=[]







  ngOnInit() {
    console.log(this.getServicesByCategory("Web Development"))
    this.categories = [...new Set (this.services.map(service => service.category))]

  }

  getServicesByCategory(category:string){

    return this.services.filter(service => (service!==null && service.category === category))
  }






}
