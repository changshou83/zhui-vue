module.exports = {
  rules: {
    // 某些数组方法的回调函数中必须包含 return 语句
    'array-callback-return': ['error', { allowImplicit: true }],

    // 设置圈复杂度最大值
    // @reason IDE 插件会把大段代码标红，影响编码体验，此类问题适合做后置检查
    complexity: ['off', 10],

    // 多行语句必须用大括号包裹，单行语句推荐用大括号包裹
    curly: ['error', 'multi-line'],

    // switch 语句需要始终包含 default 分支
    'default-case': ['warn', { commentPattern: '^no default$' }],

    // 统一在点号之前换行
    // @unessential
    'dot-location': ['error', 'property'],

    // 使用严格相等运算符
    eqeqeq: ['warn', 'always', { null: 'ignore' }],

    // for-in 循环中需要对 key 进行验证
    'guard-for-in': 'warn',

    // case 或 default 字句出现词法声明时，必须用块包裹
    'no-case-declarations': 'error',

    // 如果一个 if 语句的结果总是返回一个 return 语句，那么最后的 else 是不必要的
    // @reason 很多人习惯写 else return
    'no-else-return': 'off',

    // 不要出现空函数
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    // 不要在解构中出现空模式，即 {} 或 []
    'no-empty-pattern': 'error',

    // 与 null 的比较必须使用严格等于操作符
    'no-eq-null': 'off',

    // 不要省略小数点前或小数点后的 0
    'no-floating-decimal': 'error',

    // 禁止使用类 eval 的方法，如 setTimeout 传入字符串
    // @unessential
    'no-implied-eval': 'error',

    // 禁止在循环中的函数内出现外部作用域中定义且会发生变化的变量，以防止闭包副作用
    'no-loop-func': 'error',

    // 禁用魔术数字
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],

    // 禁止出现多个连续空格
    // @unessential
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],

    // 禁止单独 new 一个构造函数而不用于赋值或比较
    'no-new': 'error',

    // 不要使用 Function 构造函数创建函数
    'no-new-func': 'error',

    // 不要使用 new Number/String/Boolean
    'no-new-wrappers': 'error',

    // 不要修改函数参数
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'draft', // for immer
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          '$scope', // for Angular 1 scopes
        ],
      },
    ],

    // 不要重复声明变量和函数
    'no-redeclare': 'error',

    // 禁用不变的循环条件
    'no-unmodified-loop-condition': 'off',

    // 禁止出现未使用的表达式
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],

    // 禁用不必要的 catch
    'no-useless-catch': 'error',

    // 禁止不必要的字符串拼接
    'no-useless-concat': 'error',

    // 禁止不必要的转义字符
    'no-useless-escape': 'error',

    // 禁止多余的 return; 语句
    'no-useless-return': 'error',

    // 禁止使用 with
    'no-with': 'error',

    // 禁止使用不带 await 表达式的 async 函数
    'require-await': 'off',

    // 使用 color === 'red' 而不是 'red' === color
    yoda: 'warn',
  },
};
