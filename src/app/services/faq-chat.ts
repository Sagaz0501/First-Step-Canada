import { Injectable } from '@angular/core';

export type ChatTopic = 'taxes' | 'sin' | 'g1' | 'general';

export interface FaqItem {
  topic: ChatTopic;
  question: string;
  keywords: string[];
  answer: string;
  links?: { label: string; url: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class FaqChat {
  faqs: FaqItem[] = [
    {
      topic: 'taxes',
      question: 'When is the tax deadline in Canada?',
      keywords: ['deadline', 'april', 'file', 'due date', 'tax'],
      answer:
        'Most people file their personal tax return by April 30 (for the previous year). If you owe money, paying on time helps avoid interest.',
      links: [
        { label: 'Personal income tax (Canada.ca)', url: 'https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax.html' }
      ]
    },
    {
      topic: 'taxes',
      question: 'What does “tax withheld” mean?',
      keywords: ['withheld', 'paycheque', 'deducted', 't4'],
      answer:
        'Tax withheld is the amount your employer already took from your paycheque and sent to the CRA. It counts toward what you owe. If too much was withheld, you may get a refund.'
    },
    {
      topic: 'sin',
      question: 'What is a SIN and why do I need it?',
      keywords: ['sin', 'social insurance', 'work', 'number'],
      answer:
        'A SIN (Social Insurance Number) is a 9-digit number you need to work in Canada and access some government programs.'
    },
    {
      topic: 'g1',
      question: 'What is the G1 in Ontario?',
      keywords: ['g1', 'ontario', 'driver', 'license', 'test'],
      answer:
        'The G1 is the first stage of Ontario’s graduated licensing system. You need to pass a knowledge test about road rules and signs.'
    },
  ];

  getQuickOptions(): { topic: ChatTopic; label: string }[] {
    return [
      { topic: 'general', label: 'General' },
      { topic: 'taxes', label: 'Taxes' },
      { topic: 'sin', label: 'SIN' },
      { topic: 'g1', label: 'G1' },
    ];
  }

  // simple keyword matching
  findBestAnswer(userText: string, topic: ChatTopic): FaqItem | null {
    const text = userText.toLowerCase().trim();
    if (!text) return null;

    const candidates = this.faqs.filter(f => topic === 'general' ? true : f.topic === topic);

    let best: { item: FaqItem; score: number } | null = null;

    for (const item of candidates) {
      let score = 0;
      for (const k of item.keywords) {
        if (text.includes(k.toLowerCase())) score += 1;
      }
      // small bonus if question words match
      if (text.includes(item.question.toLowerCase().split(' ')[0])) score += 1;

      if (score > 0 && (!best || score > best.score)) {
        best = { item, score };
      }
    }

    return best ? best.item : null;
  }
}
