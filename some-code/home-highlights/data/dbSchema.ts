export type AgendaEvent = {
  id: string;
  name: string;
  start?: string;
  end: string,
  state: Partial<Record<AgendaEventCategory, AgendaEventStatus>>;
  tags?: string[] | null;
};


export type AgendaEventCategory =
  | 'current'
  | 'exhibitions'
  | 'theatreandacne'
  | 'sports'
  | 'fairs'
  | 'events'
  | 'crshitmas';

export type AgendaEventStatus = 'cadidate' | 'highilght' | 'mainfocus'

export const exampleAgendaEvent: AgendaEvent = {
  id: 'djwkmidnim20',
  name: 'PhtoEspan 2020',
  start: '2020-01-26T00:00:00.00z',
  end: '2020-04-26600:00:00.000z',
  state: {
    current: 'highlight',
    fairs: 'mainfocus',
  },
  tags: ['new'],
}
