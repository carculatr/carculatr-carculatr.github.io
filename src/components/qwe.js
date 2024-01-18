ym(25355216, 'reachGoal', 'test10')
ym(25355216, 'reachGoal', 'test15', { order_price: '1000.35', currency: 'RUB' })
const YaMetric = (param1, param2) => {
  if (param1 == 'roll') {
    console.log('roll🟢')
    yaCounter25355216.reachGoal('test12', {
      [param1]: param2
    })
  }

  yaCounter25355216.reachGoal('ROLL1', [
    { ROLL: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] },
    { preset: `🟡3,25x5шт +🟡7,35x2шт + 🟢61🟢62🟢63🟢64🟢 65 🟢 66 🟢 67 ` }
  ])
  yaCounter25355216.reachGoal(
    'ROLL1'[
      ({ ROLL: ['01', '02', '03', '04', '05', '06', '07', '08', '09'] },
      { preset: `🟡11,25x0шт +🟡17,35x0шт + 🟢31🟢32🟢33🟢34🟢 35 🟢 36 🟢 37 ` })
    ]
  )

  yaCounter25355216.reachGoal('DIVAN3', [
    { DIVAN150: ['7.35', '11.11'] }
    // { DIVAN106: `🟡11,25x0шт +🟡17,35x0шт` }
  ])

  yaCounter25355216.reachGoal('test15', { roll03: '01' })
  yaCounter25355216.reachGoal('test15', { roll03: '02' })
  yaCounter25355216.reachGoal('test15', { roll03: '03' })
  yaCounter25355216.reachGoal('test15', { roll004: '004', roll004: '005' })
  yaCounter25355216.reachGoal('test15', { roll004: '006', roll004: '007' })
  yaCounter25355216.reachGoal('test15', { ROLL3: ['1', '2', '3', '4', '5', '6', '7', '8', '9'] })
  yaCounter25355216.reachGoal('test15', { ROLL3: ['01', '02', '03', '04'] })
  yaCounter25355216.reachGoal('test15', { ROLL3: ['003', '004', '005', '006'] })

  console.log('🔥', { [param1]: param2 })
}
//roll
setTimeout(() => {
  YaMetric('roll', '50')
  YaMetric('roll', '80')
}, 200)
yaCounter25355216.reachGoal('test11', {
  VISIT: 'visit'
})
console.log('🎅metrica test')
