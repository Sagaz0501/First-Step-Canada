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
  shortDescription: 'A SIN is usually required to work and for taxes in Canada.',

  overview:
    'A Social Insurance Number (SIN) is a 9-digit number issued by the Government of Canada. You usually need it to work in Canada and to access some government programs and benefits.',

  keyPoints: [
    'Keep your SIN private (like a password). Only share it when legally required.',
    'Most people apply online or in person through Service Canada.',
    'You do not usually need a SIN to rent a home or buy a phone plan.',
  ],

  steps: [
    {
      title: 'Understand what a SIN is',
      description:
        'A SIN is a 9-digit number used for work and taxes. You will use it for payroll and when filing taxes with the CRA.',
    },
    {
      title: 'Check your eligibility',
      description:
        'You must have valid status in Canada (citizen, permanent resident, or temporary resident with authorization to work or study).',
    },
    {
      title: 'Prepare your documents',
      description:
        'Required documents depend on your status. Temporary residents often use a passport plus a study or work permit. Bring original documents, not photocopies.',
    },
    {
      title: 'Choose how you will apply',
      description:
        'You can apply online or in person at a Service Canada office. Mail may be available but is usually slower.',
    },
    {
      title: 'Receive your SIN confirmation',
      description:
        'If your documents are accepted, you will receive a SIN confirmation. In person can often be same-day, while other methods may take longer.',
    },
    {
      title: 'Protect your SIN and use it safely',
      description:
        'Share your SIN only with trusted official places (employer/payroll, CRA, some banks). Store it securely and avoid sharing it casually.',
    },
  ],

  glossary: [
    { term: 'Service Canada', meaning: 'A Government of Canada service that helps with programs like SIN applications.' },
    { term: 'CRA', meaning: 'Canada Revenue Agency (the organization that handles taxes).' },
    { term: 'Temporary resident', meaning: 'A person in Canada on a permit (for example, study or work permit).' },
  ],
},

    // ===============================
    // G1 DRIVER LICENSE PROCESS
    // ===============================
    {
      id: 'g-license',
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
      keyPoints: [
        'Ontario uses a graduated licensing system: G1 → G2 → G.',
        'G1 is a knowledge test + learner rules. G2 is your first road test. G is the full licence.',
        'Fees and rules can change — always confirm on official DriveTest / Ontario pages.',
        'If you fail a test, you usually pay again to rebook that attempt.',
      ],

      keyDates: [
        { label: 'G1 licence package (knowledge + G2 test + 5-year licence)', value: '$159.75 (DriveTest fee)' },
        { label: 'Knowledge test (extra attempt / retake)', value: '$16.00' },
        { label: 'G2 road test (one attempt)', value: '$53.75' },
        { label: 'G road test (one attempt)', value: '$91.25' },
        { label: 'Note', value: 'Fees can change — confirm on DriveTest before booking.' },
      ],

      glossary: [
        { term: 'G1', meaning: 'Learner licence level. You pass a knowledge test and drive with restrictions.' },
        { term: 'G2', meaning: 'Intermediate licence level. You pass your first road test.' },
        { term: 'G', meaning: 'Full licence. You pass the final road test.' },
        { term: 'Knowledge test', meaning: 'Written test about rules of the road and road signs.' },
        { term: 'Road test', meaning: 'Driving test in a car with an examiner (G2 and G levels).' },
        { term: 'DriveTest', meaning: 'Ontario test centres that run knowledge tests and road tests for MTO.' },
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
