// #TODO использованые подсказки и нажатия enter
import { useCarcStore } from '@/stores/dataForCalculation'
let carcStore
setTimeout(() => {
  carcStore = useCarcStore()
  // divanAll()
  // rollAll()

  const testMnogomer = {
    массив: ['🔴Только первое значение?', '🟢второе в пролёте?'],
    объект: {
      параметр1: 'первое значение',
      параметр2: 'второе значение'
    },
    объект2: {
      qwe1: [0, 1, 2, 3],
      qwe2: [{ name1: 'первый' }, { name2: 'второй' }]
    }
  }
  const testMnogomer2 = {
    Метражи: [11, 22],
    'Кол-во штук': [5, 6],
    'Метраж/шт': [
      [33, 7 + 'шт'],
      [44, 8 + 'шт']
    ]
  }
  // console.log(testMnogomer)
  // YaMetric('OBJECT', testMnogomer2)
}, 100)
export default function (param, param2) {
  // if (true) return false

  if (param == 'roll') roll(param2)
  else if (param == 'rollAll') rollAll()
  else if (param == 'divanAll') divanAll()
  else if (param == 'easter') easter(param2)
  else if (param == 'theme') carcSetting('Тема', param2)
  else if (param == 'openSetting') carcSetting('Открытие настроек', '⚙')
  else if (param == 'Additive') carcSetting('Рассчёт по доп биркам', param2)
  else if (param == 'grid') carcSetting('Режим таблицы', param2)
  else if (param == 'onlyWithRoll') carcSetting('Только с роликами', param2)
  else if (param == 'grouped') carcSetting('Группировка одинаковых метражей', param2)
  else if (param == 'colorTT') carcSetting('Цветные буквы', param2)
  else if (param == 'colorGrid') carcSetting('Цветная сетка', param2)
  else console.log(`🔰🔴🔴NO METRIC FUNC🔴${param}🔴`, param2)
  // YaMetric("🔴","🟢")
  // return "qwe"
}

const carcSetting = (p1, p2) => {
  console.log('🔋SETTING', { [p1]: p2 })
  YaMetric('SETTING', { [p1]: p2 })
}

const roll = (p) => {
  // console.log('🔋roll', p)
  YaMetric('ROLL', p)
}

const rollAll = () => {
  // console.log('🔋rollAll', carcStore.carc.rolls + '')
  YaMetric('ROLL_ALL', carcStore.carc.rolls + '')
}
const divanAll = () => {
  const items = carcStore.carc.items
  const rolls = carcStore.carc.rolls
  const m1 = items[0].meter
  const m2 = items[1].meter
  const pc1 = items[0].pc
  const pc2 = items[1].pc
  let mainMetric = {
    Метражи: [m1, m2],
    'Кол-во штук': [pc1, pc2],
    'Метраж/шт': [[m1 + '/' + pc1 + 'шт'], [m2 + '/' + pc2 + 'шт']],
    'Метраж/шт(string)': `🟡${m1}/${pc1}шт🟡${m2}/${pc2}шт`,
    Preset: `🟡${m1}/${pc1}шт🟡${m2}/${pc2}шт🟢ROLL-${rolls}`
  }
  // console.log('divanAll', mainMetric)
  // console.table(mainMetric)
  YaMetric('ДИВАНЫ', mainMetric)
}
const easter = (p) => {
  // console.log('🔋easter', p)
  YaMetric('EASTER', p)
}

const YaMetric = (param1, param2) => {
  // console.log('🔰YaMetric', param1, param2)

  // ym(40821989, 'params', { [param1]: param2 })
  ym(95333779, 'reachGoal', param1, { [param1]: param2 })
}
