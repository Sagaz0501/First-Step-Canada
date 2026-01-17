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
  id: string;                 // unique identifier (sin, g1, taxes)
  title: string;              // title shown on cards
  shortDescription: string;   // short text for home page card
  overview: string;           // explanation page (before wizard)
  steps: ProcessStep[];       // step-by-step wizard content
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
      title: 'Basic Taxes in Canada',
      shortDescription:
        'Learn the basics of filing taxes in Canada.',

      overview:
        'In Canada, most residents must file an income tax return every year. This helps determine if you owe money or receive a refund from the government.',

      steps: [
        {
          title: 'Collect your tax documents',
          description:
            'Common documents include T4 slips, tuition receipts, and benefit statements.',
        },
        {
          title: 'Choose a filing method',
          description:
            'You can file taxes online using certified software or through a tax clinic.',
        },
        {
          title: 'Submit your tax return',
          description:
            'Most people must file taxes by April 30 each year.',
        },
        {
          title: 'Receive your Notice of Assessment',
          description:
            'After submission, the CRA will send a summary of your tax results.',
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
