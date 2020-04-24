var isNumber = function(s) {
    s = s.trim();
    let reg1 = /^[+-]?((\d+)?\.)?\d+\.?e[+-]?\d+$/i; // 带e的
    let reg2 = /^[+-]?\d+(\.\d+)?$/;
    let reg3 = /^[+-]?\d+\.$/;
    let reg4 = /^[+-]?\.\d+$/;
    return reg1.test(s) || reg2.test(s) || reg3.test(s) || reg4.test(s);
  };
  