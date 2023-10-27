import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const agentBoostTheme: CustomThemeConfig = {
  name: 'agentboost-theme',
  properties: {
    // =~= Theme Properties =~=
    '--theme-font-family-base': `system-ui`,
    '--theme-font-family-heading': `system-ui`,
    '--theme-font-color-base': '0 0 0',
    '--theme-font-color-dark': '255 255 255',
    '--theme-rounded-base': '9999px',
    '--theme-rounded-container': '8px',
    '--theme-border-base': '1px',
    // =~= Theme On-X Colors =~=
    '--on-primary': '0 0 0',
    '--on-secondary': '0 0 0',
    '--on-tertiary': '255 255 255',
    '--on-success': '0 0 0',
    '--on-warning': '0 0 0',
    '--on-error': '255 255 255',
    '--on-surface': '255 255 255',
    // =~= Theme Colors  =~=
    // primary | #3D7FFF
    '--color-primary-50': '226 236 255', // #e2ecff
    '--color-primary-100': '216 229 255', // #d8e5ff
    '--color-primary-200': '207 223 255', // #cfdfff
    '--color-primary-300': '177 204 255', // #b1ccff
    '--color-primary-400': '119 165 255', // #77a5ff
    '--color-primary-500': '61 127 255', // #3D7FFF
    '--color-primary-600': '55 114 230', // #3772e6
    '--color-primary-700': '46 95 191', // #2e5fbf
    '--color-primary-800': '37 76 153', // #254c99
    '--color-primary-900': '30 62 125', // #1e3e7d
    // secondary | #49F9EA
    '--color-secondary-50': '228 254 252', // #e4fefc
    '--color-secondary-100': '219 254 251', // #dbfefb
    '--color-secondary-200': '210 254 250', // #d2fefa
    '--color-secondary-300': '182 253 247', // #b6fdf7
    '--color-secondary-400': '128 251 240', // #80fbf0
    '--color-secondary-500': '73 249 234', // #49F9EA
    '--color-secondary-600': '66 224 211', // #42e0d3
    '--color-secondary-700': '55 187 176', // #37bbb0
    '--color-secondary-800': '44 149 140', // #2c958c
    '--color-secondary-900': '36 122 115', // #247a73
    // tertiary | #010101
    '--color-tertiary-50': '217 217 217', // #d9d9d9
    '--color-tertiary-100': '204 204 204', // #cccccc
    '--color-tertiary-200': '192 192 192', // #c0c0c0
    '--color-tertiary-300': '153 153 153', // #999999
    '--color-tertiary-400': '77 77 77', // #4d4d4d
    '--color-tertiary-500': '1 1 1', // #010101
    '--color-tertiary-600': '1 1 1', // #010101
    '--color-tertiary-700': '1 1 1', // #010101
    '--color-tertiary-800': '1 1 1', // #010101
    '--color-tertiary-900': '0 0 0', // #000000
    // success | #84cc16
    '--color-success-50': '237 247 220', // #edf7dc
    '--color-success-100': '230 245 208', // #e6f5d0
    '--color-success-200': '224 242 197', // #e0f2c5
    '--color-success-300': '206 235 162', // #ceeba2
    '--color-success-400': '169 219 92', // #a9db5c
    '--color-success-500': '132 204 22', // #84cc16
    '--color-success-600': '119 184 20', // #77b814
    '--color-success-700': '99 153 17', // #639911
    '--color-success-800': '79 122 13', // #4f7a0d
    '--color-success-900': '65 100 11', // #41640b
    // warning | #EAB308
    '--color-warning-50': '252 244 218', // #fcf4da
    '--color-warning-100': '251 240 206', // #fbf0ce
    '--color-warning-200': '250 236 193', // #faecc1
    '--color-warning-300': '247 225 156', // #f7e19c
    '--color-warning-400': '240 202 82', // #f0ca52
    '--color-warning-500': '234 179 8', // #EAB308
    '--color-warning-600': '211 161 7', // #d3a107
    '--color-warning-700': '176 134 6', // #b08606
    '--color-warning-800': '140 107 5', // #8c6b05
    '--color-warning-900': '115 88 4', // #735804
    // error | #D41976
    '--color-error-50': '249 221 234', // #f9ddea
    '--color-error-100': '246 209 228', // #f6d1e4
    '--color-error-200': '244 198 221', // #f4c6dd
    '--color-error-300': '238 163 200', // #eea3c8
    '--color-error-400': '225 94 159', // #e15e9f
    '--color-error-500': '212 25 118', // #D41976
    '--color-error-600': '191 23 106', // #bf176a
    '--color-error-700': '159 19 89', // #9f1359
    '--color-error-800': '127 15 71', // #7f0f47
    '--color-error-900': '104 12 58', // #680c3a
    // surface | #495a8f
    '--color-surface-50': '228 230 238', // #e4e6ee
    '--color-surface-100': '219 222 233', // #dbdee9
    '--color-surface-200': '210 214 227', // #d2d6e3
    '--color-surface-300': '182 189 210', // #b6bdd2
    '--color-surface-400': '128 140 177', // #808cb1
    '--color-surface-500': '73 90 143', // #495a8f
    '--color-surface-600': '66 81 129', // #425181
    '--color-surface-700': '55 68 107', // #37446b
    '--color-surface-800': '44 54 86', // #2c3656
    '--color-surface-900': '36 44 70', // #242c46
  },
};
