import { Injectable } from '@angular/core';

/*
  This service contains ALL the INFORMATION about the processes.

  IMPORTANT:
  - This file does NOT control UI
  - This file does NOT contain HTML
  - This file does NOT contain styling
  - This file only stores DATA (text, steps, descriptions)

  Components will READ this data and DISPLAY it.
*/

export interface ProcessStep {
  title: string;
  description: string;
}


export interface ProcessInfo {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  steps: ProcessStep[];

  // Optional extra fields (safe to ignore in UI if not used)
  keyPoints?: string[];
  keyDates?: { label: string; value: string }[];
  glossary?: { term: string; meaning: string }[];
}


@Injectable({
  providedIn: 'root',
})
export class ProcessDataService {

  /*
    This array contains all supported processes.

    Each team member should ONLY modify
    the process they are responsible for.

    Example:
    - SIN developer → edits only the object with id: 'sin'
    - G1 developer → edits only id: 'g1'
    - Taxes developer → edits only id: 'taxes'
  */
  processes: ProcessInfo[] = [

    // ===============================
    // SIN PROCESS
    // ===============================
    {
      id: 'sin',
      title: 'Social Insurance Number (SIN)',
      shortDescription:
        'A SIN is required to work and pay taxes in Canada.',

      overview:
        'A Social Insurance Number (SIN) is a 9-digit number issued by the Government of Canada. You need it to work in Canada and to access government programs and benefits.',

      steps: [
        {
          title: 'Prepare your documents',
          description:
            'You must bring a valid passport and your study or work permit.',
        },
        {
          title: 'Check your eligibility',
          description:
            'Make sure your immigration status allows you to work or study in Canada.',
        },
        {
          title: 'Visit Service Canada',
          description:
            'Go to a Service Canada office or apply online through the official website.',
        },
        {
          title: 'Receive your SIN',
          description:
            'If your documents are valid, your SIN will be issued the same day.',
        },
      ],
    },

    // ===============================
    // G1 DRIVER LICENSE PROCESS
    // ===============================
    {
      id: 'g1',
      title: 'G1 Driver’s License (Ontario)',
      shortDescription:
        'The G1 is the first step to getting a driver’s license in Ontario.',

      overview:
        'The G1 license is the first level of Ontario’s graduated licensing system. It allows you to start learning how to drive legally in Ontario.',

      steps: [
        {
          title: 'Confirm eligibility',
          description:
            'You must be at least 16 years old and live in Ontario.',
        },
        {
          title: 'Bring required documents',
          description:
            'Bring identification that shows your legal name, date of birth, and signature.',
        },
        {
          title: 'Pass the knowledge test',
          description:
            'You must pass a written test about road rules and traffic signs.',
        },
        {
          title: 'Receive your G1 license',
          description:
            'After passing the test, you will receive your G1 license.',
        },
      ],
    },

// ===============================
// TAXES BASIC PROCESS
// ===============================
{
  id: 'taxes',
  title: 'Taxes in Canada (CRA Basics)',
  shortDescription:
    'Learn what taxes are, who needs to file, key dates, and the basic steps to file with the CRA.',

  // Overview = content for Taxes Overview page (plain language + structured)
  overview:
    'In Canada, most people file an income tax return once per year with the Canada Revenue Agency (CRA). Filing taxes helps the government calculate if you owe money, get a refund, or qualify for benefits (like GST/HST credit). Even if you had little or no income, filing can still be important for benefits.',

  // Optional structured content for your overview screen
  keyPoints: [
    'You usually file taxes for the previous year (for example, in 2026 you file for 2025).',
    'Filing taxes can help you get refunds and benefits, not just pay money.',
    'You may receive tax slips like a T4 (employment) or T2202 (tuition).',
    'Most people file online using CRA-certified software, or with a free tax clinic (if eligible).',
    'Keep your documents and tax return for your records.',
  ],

  keyDates: [
    { label: 'Typical filing deadline', value: 'April 30 (most people)' },
    { label: 'Self-employed deadline (return)', value: 'June 15 (payment is still due April 30)' },
    { label: 'Important', value: 'Deadlines can change — check CRA each year.' },
  ],

  glossary: [
    { term: 'CRA', meaning: 'Canada Revenue Agency (the government organization that handles taxes).' },
    { term: 'Tax return', meaning: 'The form you submit to report your income and claim credits.' },
    { term: 'Refund', meaning: 'Money you get back if you paid more tax than needed.' },
    { term: 'Notice of Assessment', meaning: 'A summary from CRA after they review your return.' },
    { term: 'T4', meaning: 'A slip that shows employment income and deductions from your job.' },
  ],

  // Wizard steps = simple, actionable, step-by-step
  steps: [
    {
      title: 'Gather your documents',
      description:
        'Collect tax slips (like T4), tuition slips (if you study), and any benefit statements. If you are new, keep your immigration documents and address info ready.',
    },
    {
      title: 'Choose how to file',
      description:
        'Most people file online with CRA-certified tax software. If you qualify, you can also use a free community tax clinic.',
    },
    {
      title: 'File and submit your return',
      description:
        'Enter your information carefully, review it, and submit your return. Save a copy of what you submitted.',
    },
    {
      title: 'Check your results',
      description:
        'After filing, CRA sends a Notice of Assessment. It shows if you owe money, get a refund, or need to correct anything.',
    },
  ],
},

  ];

  /*
    Helper method (optional):

    This allows components to easily find
    a process by its ID.

    Example:
    getProcessById('sin')
  */
  getProcessById(id: string): ProcessInfo | undefined {
    return this.processes.find(p => p.id === id);
  }
}
