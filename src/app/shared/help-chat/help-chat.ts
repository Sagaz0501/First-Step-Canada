import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FaqChat, ChatTopic } from '../../services/faq-chat';

type Msg = { from: 'user' | 'bot'; text: string; links?: { label: string; url: string }[] };

@Component({
  selector: 'app-help-chat',
  imports: [
        CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './help-chat.html',
  styleUrl: './help-chat.css',
})
export class HelpChat {
  isOpen = false;

  topic: ChatTopic = 'general';
  input = '';

  messages: Msg[] = [
    { from: 'bot', text: 'Hi! Choose a topic and ask a question. I’ll answer using our official quick guides.' }
  ];

  constructor(public faq: FaqChat) {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  setTopic(t: ChatTopic) {
    this.topic = t;
    this.messages.push({ from: 'bot', text: `Topic set to: ${t.toUpperCase()}. Ask your question.` });
  }

  send() {
    const text = this.input.trim();
    if (!text) return;

    this.messages.push({ from: 'user', text });
    this.input = '';

    const found = this.faq.findBestAnswer(text, this.topic);

    if (found) {
      this.messages.push({ from: 'bot', text: found.answer, links: found.links });
    } else {
      this.messages.push({
        from: 'bot',
        text: `I’m not sure about that yet. Try asking with different keywords or check official links below.`,
        links: [
          { label: 'Canada.ca Taxes', url: 'https://www.canada.ca/en/services/taxes.html' },
          { label: 'Service Canada (SIN)', url: 'https://www.canada.ca/en/employment-social-development/services/sin.html' }
        ]
      });
    }
  }
}
