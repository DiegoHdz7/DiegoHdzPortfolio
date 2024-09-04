import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  headshotPath:string = "assets/images/Headshot-2.jpg";
  summaryHeaderContent:string = "Hi, I'm Diego"
  briefSummaryContent:string = " I am a passionate software developer with expertise in full-stack development and data engineering. I specialize in creating innovative solutions and driving projects to success through collaboration and technical excellence."

}
