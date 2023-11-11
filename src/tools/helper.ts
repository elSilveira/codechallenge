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
    color: 'purple',
    border: 'orange',
    data: new Set()
  },
  {
    title: 'RFP IN PROGRESS',
    selected: false,
    color: 'orange',
    border: 'purple',
    data: new Set()
  },
  {
    title: 'SUBMITED',
    selected: false,
    color: 'blue',
    border: 'purple',
    data: new Set()
  },
  {
    title: 'WON',
    selected: false,
    color: 'green',
    border: 'purple',
    data: new Set()
  },
  {
    title: 'LOST',
    selected: false,
    color: 'red',
    border: 'purple',
    data: new Set()
  },
  {
    title: 'CLOSED',
    selected: false,
    color: 'gray',
    border: 'purple',
    data: new Set()
  }
])