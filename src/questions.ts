export enum QuestionType {
  Boolean = 'Boolean',
  Points = 'Points',
}

export type Question = {
  id: string;
  text: string;
  value: number;
  type: QuestionType;
  maxValue?: number;
  comment?: string;
  disabled: boolean;
};

export enum Result {
  LowRisk = 'Low Risk',
  ModerateRisk = 'Moderate Risk',
  HighRisk = 'High Risk',
  HighestRisk = 'Highest Risk',
}

export const ResultInterpretationMap = {
  [Result.LowRisk]:
    'The patient’s odds of premature epilepsy-related death within seven years are not clearly increased.',
  [Result.ModerateRisk]:
    'The patient’s odds of premature epilepsy-related death within seven years are increased 2-3-fold.',
  [Result.HighRisk]:
    'The patient’s odds of premature epilepsy-related death within seven years are increased 14-fold.',
  [Result.HighestRisk]:
    'The patient’s odds of premature epilepsy-related death within seven years are increased 24-29-fold.',
};

export const questions: Question[] = [
  {
    id: '1',
    text: 'The patient lives in one of the most deprived SIMD quintiles.',
    value: 2,
    comment:
      'SIMD quintiles take a number between 1–5. Quintiles 1–2 = the two most deprived. To calculate SIMD quintile, simply enter the patient’s postcode into column A here – www.bit.ly/3qTxvpC, and look for the result in column F.',
    type: QuestionType.Boolean,
    disabled: false,
  },
  {
    id: '2',
    text: 'The patient has experienced at least one A&E attendance or hospital admission because of a seizure or related to their epilepsy within the last 12 months.',
    value: 3,
    type: QuestionType.Boolean,
    disabled: false,
  },
  {
    id: '3',
    text: 'The patient has an inherited or congential aetiology/risk factor for their epilepsy.',
    value: 2,
    type: QuestionType.Boolean,
    comment:
      'Includes febrile convulsions, first degree relative with epilepsy, congenital abnormality/malformation (e.g. cerebral palsy, metabolic infancy syndrome, birth hypoxia), genetic syndrome, ADHD, ASD, developmental/intellectual delay, premature birth, birth/perinatal difficulties, hydrocephalus, neonatal seizures.',
    disabled: false,
  },
  {
    id: '4',
    text: `The patient's Charlson Comorbidity Index (CCI) Score is above or equal to 2.`,
    value: 1,
    type: QuestionType.Boolean,
    comment: `To calculate their CCI, complete the following online tool: https://www.mdcalc.com/calc/3917/charlson-comorbidity-index-cci`,
    disabled: false,
  },
];
