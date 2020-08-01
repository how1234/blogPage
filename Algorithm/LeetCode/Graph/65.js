/**
 * @param {string} s
 * @return {boolean}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
var isNumber = function(s) {
  //状态机方法
  const graph = {
      0: {'blank':0,'sign':1,'.':2,'digit':6},
      1: {'digit':6,'.':2},
      2: {'digit':3},
      3: {'digit':3, 'e':4},
      4: {'sign':7,'digit':5},
      5: {'digit':5},
      6: {'digit':6,'.':3,'e':4},
      7: {'digit':5}
  }

  let state = 0;

  for(let c of s.trim()){
      if(c >= '0' && c<= '9'){
          c = 'digit'
      }else if (c === ' '){
          c = 'blank'
      }else if (c === '+' || c==='-'){
          c = 'sign'
      }

      state = graph[state][c]

      if(state === undefined){
          return false
      }
  }
  return state === 3 || state === 5 || state === 6

  
};