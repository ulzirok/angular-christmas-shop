import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-timer',
  imports: [RouterLink],
  templateUrl: './timer.html',
  styleUrl: './timer.scss'
})
export class Timer implements OnInit {
  constructor() { }
  
  public currentYear: number = new Date().getFullYear();
  public nextYear: Date = new Date(`January 01 ${this.currentYear + 1} 00:00:00`)
  
  public days: number = 0
  public hours: number = 0
  public minutes: number = 0
  public seconds: number = 0
  
  private intervalId!: ReturnType<typeof setInterval>;
  
  updateTimer() {
    const currentTime: Date = new Date();
    const diff: number = this.nextYear.getTime() - currentTime.getTime();
    
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;
    
    this.days = daysLeft;
    this.hours = hoursLeft;
    this.minutes = minutesLeft;
    this.seconds = secondsLeft
  }
  
  ngOnInit(): void {
    this.updateTimer()
    this.intervalId = setInterval(() => this.updateTimer(), 1000)
  }
  
  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }
}
