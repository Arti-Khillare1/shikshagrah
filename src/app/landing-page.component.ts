import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent  implements OnInit{

  projectId: string | null = null;
  action: string | null = null;
  validActions: string[] = ['create-observation', 'take-survey', 'project'];

  constructor(private route: ActivatedRoute,  private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.action = params['action']; 
      this.projectId = params['id']; 

      if (this.action && !this.validActions.includes(this.action as string)) {
        this.router.navigate(['/404']); 
      }
    });
  }

  handleAction() {
    switch (this.action) {
      case 'create-observation':
        this.onCreateObservation();
        break;
      case 'take-survey':
        this.onTakeSurvey();
        break;
      case 'project':
      case 'start':
        this.onStartProject();
        break;
      default:
        console.error('Invalid action');
    }
  }

  onInstallClick() {
     window.open('https://play.google.com/store/apps/details?id=org.shikshagraha.app&hl=en_IN', '_blank');
  }

  onStartProject() {

    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
    if (isMobile) {
      if (/Android/i.test(navigator.userAgent)) {
        // Android Intent link (trigger app on Android)
        window.location.href = 'intent://launch/#Intent;scheme=appname;package=org.shikshagraha.app;end';
      } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // iOS URL scheme or Universal Link
        window.location.href = 'appname://';
        
        // Fallback to App Store if app is not installed
        setTimeout(function() {
          window.location.href = 'https://apps.apple.com/us/app/shikshagraha/id123456789';
        }, 1000);
      }
    } else {
      // For desktop, provide a download link or alternative action
      alert("Please download the Shikshagraha app on your mobile device.");
      window.open('https://play.google.com/store/apps/details?id=org.shikshagraha.app&hl=en_IN', '_blank');
    }
  }

  onCreateObservation() {

  }

  onTakeSurvey() {

  }

}
