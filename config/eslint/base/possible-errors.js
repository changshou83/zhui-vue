module.exports = {
  rules: {
    // for 循环中的计数器应朝着正确方向移动
    'for-direction': 'error',

    // 不要在循环中使用 await，应使用 Promise.all()
    'no-await-in-loop': 'warn',

    // 不要在条件表达式中使用赋值语句
    'no-cond-assign': ['error', 'always'],

    // 生产环境禁止使用 console
    'no-console': 'warn',

    // 禁止使用 debugger
    'no-debugger': 'error',

    // 函数的参数列表中禁止出现重复命名的参数
    'no-dupe-args': 'error',

    // 对象中禁止出现重复命名的 key
    'no-dupe-keys': 'error',

    // switch 语句中禁止出现重复的 case
    'no-duplicate-case': 'error',

    // 不要出现空代码块
    'no-empty': 'error',

    // 禁止在正则中使用空字符集 []，这不能匹配任何字符，可能是 type error
    'no-empty-character-class': 'error',

    // 避免不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',

    // 禁止不必要的分号
    'no-extra-semi': 'error',

    // 不要对函数声明重新赋值
    'no-func-assign': 'error',

    // 不要在块中使用函数声明
    'no-inner-declarations': 'error',

    // 禁止在 RegExp 构造函数中使用无效的正则表达式
    'no-invalid-regexp': 'error',

    // 禁止将全局对象 Math、JSON、Reflect 当作函数进行调用
    'no-obj-calls': 'error',

    // 禁用稀疏数组，如 var items = [,,];
    'no-sparse-arrays': 'error',

    // 避免令人困惑的多行表达式，多是由不加分号导致
    'no-unexpected-multiline': 'error',

    // 不要在 return 等语句之后出现不可达的代码
    'no-unreachable': 'error',

    // 使用 Number.isNaN()，而不是直接与 NaN 进行比较
    'use-isnan': 'error',

    // 使用有效的 JSDoc 注释
    'valid-jsdoc': 'off',

    /* eslint-disable */
    // 同 typeof 表达式结果进行比较的值必须是有效的字符串，即 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
    'valid-typeof': ['error', { requireStringLiterals: true }],
  },
};
