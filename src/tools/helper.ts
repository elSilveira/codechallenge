export const salesTypes = {
  basic: 'Basic',
  advanced: 'Advanced',
  expert: 'Expert',
  custom: 'Custom'
}

export const salesTabs = new Set([
  {
    title: 'LEAD',
    selected: false,
    color: '--S-1',
    data: new Set()
  },
  {
    title: 'RFP IN PROGRESS',
    selected: false,
    color: '--S-2',
    data: new Set()
  },
  {
    title: 'SUBMITED',
    selected: false,
    color: '--S-3',
    data: new Set()
  },
  {
    title: 'WON',
    selected: false,
    color: '--S-4',
    data: new Set()
  },
  {
    title: 'LOST',
    selected: false,
    color: '--S-5',
    data: new Set()
  },
  {
    title: 'CLOSED',
    selected: false,
    color: '--S-6',
    data: new Set()
  }
])