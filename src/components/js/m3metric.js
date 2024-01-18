import { ref, computed } from 'vue'

export default function (param, param2) {
  console.log('🔰Ya', param,param2)
if(true)return false
  if (param == 'roll') roll(param2)
  if (param == 'rollAll') rollAll(param2)

  // return "qwe"
}

const roll = (p) => {
  console.log('🔋roll', p)
}

const rollAll = (p) => {
  console.log('🔋roll', p)
}


