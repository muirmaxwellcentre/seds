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
    text: 'Patient lives in one of the two most deprived SIMD quintiles.',
    value: 2,
    comment: `<b-container>
    <p>
      SIMD quintiles take a number between 1–5. Quintiles 1–2 = the two most
      deprived. To calculate SIMD quintile, download the lookup table from <a href="https://www.gov.scot/publications/scottish-index-of-multiple-deprivation-2020v2-postcode-look-up/" target="_blank">here</a> and enter the patient’s postcode into column A. The result will automatically show in column F.</p>
    <p>*SIMD - Scottish Index of Multiple Deprivation</p>
  </b-container>
    `,
    type: QuestionType.Boolean,
    disabled: false,
  },
  {
    id: '2',
    text: 'Has the patient experienced at least one A&E attendance or hospital admission because of a seizure or related to their epilepsy within the last 12 months?',
    value: 3,
    type: QuestionType.Boolean,
    disabled: false,
  },
  {
    id: '3',
    text: 'Does the patient have an inherited or congential aetiology/risk factor for their epilepsy?',
    value: 2,
    type: QuestionType.Boolean,
    comment:
      'Includes febrile convulsions, first degree relative with epilepsy, congenital abnormality/malformation (e.g. cerebral palsy, metabolic infancy syndrome, birth hypoxia), genetic syndrome, attention deficit hyperactivity disorder (ADHD), autism spectrum disorder (ASD), developmental/intellectual delay, premature birth, birth/perinatal difficulties, hydrocephalus, neonatal seizures.',
    disabled: false,
  },
  {
    id: '4',
    text: `Patient's Charlson Comorbidity Index score is ≥2.`,
    value: 1,
    type: QuestionType.Boolean,
    comment: `<p>
    To calculate their CCI, complete the following
    <a href="https://www.mdcalc.com/calc/3917/charlson-comorbidity-index-cci" target="_blank"
      >online tool</a
    >. </p> 
    <p>Note: Do not complete age within CCI as cases and controls in our study were already 1:1 matched by age, precluding the
    inclusion of age within the model derivation.</p>`,
    disabled: false,
  },
];
