import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

type Msg = { from: 'user' | 'bot'; text: string };

@Injectable({ providedIn: 'root' })
export class LlmChatService {
  constructor(private http: HttpClient) {}

  async send(topic: string, messages: Msg[]) {
    return await firstValueFrom(
      this.http.post<{ answer: string }>('/api/chat', {
        topic,
        messages,
      })
    );
  }
}
