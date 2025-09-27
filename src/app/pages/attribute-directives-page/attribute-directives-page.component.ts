import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-attribute-directives-page',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute-directives-page.component.html',
})
export class AttributeDirectivesPageComponent {
  title = 'Attribute Directives';
  state = signal<'active' | 'error' | 'neutral'>('neutral');

  message = computed(() => {
    switch (this.state()) {
      case 'active':
        return 'This is active';
      case 'error':
        return 'An error occurred';
      case 'neutral':
        return 'This is neutral';
    }
  });

  setActive() {
    this.state.set('active');
  }
  setError() {
    this.state.set('error');
  }
  setNeutral() {
    this.state.set('neutral');
  }

 }
