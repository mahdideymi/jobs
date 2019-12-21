export default {
  people: {
    'person-1': { id: 'person-1', content: 'حمیدرضا' },
    'person-2': { id: 'person-2', content: 'امیررضا' },
    'person-3': { id: 'person-3', content: 'مهدی' },
    'person-4': { id: 'person-4', content: 'محمود' },
    'person-5': { id: 'person-5', content: 'محمدرضا' },
    'person-6': { id: 'person-6', content: 'مهدی بحرینی' },
    'person-7': { id: 'person-7', content: 'سینا' },
    'person-8': { id: 'person-8', content: 'امیر نظری' },
    'person-9': { id: 'person-9', content: 'آقای بیدرنگ' },
    'person-10': { id: 'person-10', content: 'خانم نازنین' },
    'person-11': { id: 'person-11', content: 'علیرضا' },
    'person-12': { id: 'person-12', content: 'خانم سحر' },
    'person-13': { id: 'person-13', content: 'رضا' },
  },
  stages: {
    'stage-1': {
      id: 'stage-1',
      title: 'جدید',
      personIds: ['person-5', 'person-2', 'person-3', 'person-4', 'person-9', 'person-10', 'person-11', 'person-12', 'person-13']
    },
    'stage-2': {
      id: 'stage-2',
      title: 'مصاحبه',
      personIds: ['person-1', 'person-7']
    },
    'stage-3': {
      id: 'stage-3',
      title: 'مصاحبه تلفنی',
      personIds: ['person-6', 'person-8']
    },
    'stage-4': {
      id: 'stage-4',
      title: 'ارزیابی',
      personIds: []
    },
    'stage-5': {
      id: 'stage-5',
      title: 'استخدام',
      personIds: []
    }
  },
  stageOrder: ['stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5']
}