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
import { LlmChatService } from '../../services/llm-chat.service';

import { ViewChild, ElementRef } from '@angular/core';


type Msg = {
  from: 'user' | 'bot';
  text: string;
  links?: { label: string; url: string }[];
};

@Component({
  selector: 'app-help-chat',
  standalone: true, // ✅ IMPORTANTÍSIMO para poder importarlo en app.ts
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
  isSending = false;

  messages: Msg[] = [
    { from: 'bot', text: 'Hi! Choose a topic and ask a question. I’ll answer using our official quick guides.' },
  ];

  // ✅ Volvemos a dejar faq porque tu HTML lo usa (chips / quick options)
  constructor(public faq: FaqChat, private llm: LlmChatService) {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  setTopic(t: ChatTopic) {
    this.topic = t;
    this.messages.push({ from: 'bot', text: `Topic set to: ${t.toUpperCase()}. Ask your question.` });
  }

  async send() {
    const text = this.input.trim();
    if (!text || this.isSending) return;

    this.isSending = true;

    this.messages.push({ from: 'user', text });
    this.input = '';

    // placeholder typing
    this.messages.push({ from: 'bot', text: 'Typing...' });
    const typingIndex = this.messages.length - 1;

    try {
      const payload = this.messages
        .filter(m => m.text !== 'Typing...')
        .map(m => ({ from: m.from, text: m.text }));

      const resp = await this.llm.send(this.topic, payload);

      this.messages[typingIndex] = { from: 'bot', text: resp.answer };
    } catch (e) {
      this.messages[typingIndex] = {
        from: 'bot',
        text: 'Error connecting to the chat API. Check /api/chat deployment and env vars (GROQ_API_KEY).',
        links: [
          { label: 'Canada.ca Taxes', url: 'https://www.canada.ca/en/services/taxes.html' },
          { label: 'Service Canada (SIN)', url: 'https://www.canada.ca/en/employment-social-development/services/sin.html' },
        ],
      };
    } finally {
      this.isSending = false;
    }
  }
  @ViewChild('msgsScroller') msgsScroller?: ElementRef<HTMLDivElement>;

trackMsg = (_: number, m: any) => m; // simple trackBy

private scrollToBottom() {
  // espera al render antes de scrollear
  setTimeout(() => {
    const el = this.msgsScroller?.nativeElement;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, 0);
}
}
