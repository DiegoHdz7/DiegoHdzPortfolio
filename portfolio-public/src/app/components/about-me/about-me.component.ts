import { Component } from '@angular/core';
import { AboutMeContent } from '../models/models';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  content : AboutMeContent = {
    introduction:"<p>I am Diego Hernandez, a dedicated and goal-driven Java Developer with a strong background in software engineering. My journey into technology began at the Universidad Autónoma de Yucatán, where I discovered my passion for coding while working on projects that combined hardware and software, such as domotics and robotics. This experience sparked my fascination with the power of code to control and create, setting the stage for my career in software development.</p>"+
    "<p>With 3 years of experience in the software industry, I have honed my skills in both backend and frontend development, specializing in Java, Spring Boot, Angular, and various other technologies. I have worked across multiple domains, including banking processes, data engineering, and web development, and have been involved in a range of projects from migrating legacy systems to developing new, high-performing applications.</p>"+
    "<p>My professional journey has taken me from working in the beverage industry, where I programmed production line machinery, to the Ontario Public Service, where I began as a data analyst and grew into a full-stack developer. Currently, as a Java Developer at a consulting company, I am responsible for migrating legacy systems to Java 17 with Spring Boot, developing new features, and creating business logic and documentation. I am passionate about problem-solving and always eager to take on new challenges that push the boundaries of my knowledge and abilities.</p>",
    values:" <p>I am a perseverant and goal-oriented person who values effort and dedication. Continuous learning is a core value of mine, and I am always seeking new opportunities to expand my knowledge and skills. I believe in helping others and enjoy mentoring colleagues with less experience, just as I appreciate the guidance I have received from my mentors and peers.</p>",
    goals:"<p>My ultimate goal is to become a highly proficient software engineer with a deep understanding of software systems. I aspire to be involved in all stages of the development process, from gathering requirements and designing architecture to implementing code. I am driven to take on challenging projects that push my limits, as I believe they are the best way to gain valuable experience and knowledge.</p>",
    hobbies:"  <p>Outside of work, I enjoy exploring new restaurants, cycling, and going to the movies. I am also a big fan of anime, which allows me to unwind and draw inspiration from different storytelling techniques.</p>",
    mission:" <p>My mission is to create impactful software solutions that improve people's lives. I am committed to leveraging my skills and passion for technology to build systems that are not only functional but also user-friendly and efficient. I strive to be a part of projects that challenge me and enable me to contribute meaningfully to the world of software development.</p>"
        

  }

  

}
