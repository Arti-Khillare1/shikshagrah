import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  onInstallClick() {
     window.location.href = 'https://play.google.com/store/apps/details?id=org.shikshagraha.app&hl=en_IN';
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

}
