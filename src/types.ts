type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type Hour = Digit | `${'0'|'1'}${Digit}` | `2${'0' | '1' | '2' | '3'}`
type Minute = Digit | `${'0'|'1'|'2'|'3'|'4'|'5'}${Digit}`

type HoursSuffix = 'h' | 'hours'
type HoursDuration = `${Exclude<Hour, '0' | '00'>}${HoursSuffix}`
type MinutesSuffix = 'mins' | 'minutes'
type MinutesDuration = `${Exclude<Minute, '0' | '00'>}${MinutesSuffix}`

export type Time = Date | number | `${Hour}:${Minute}`
export type Duration = HoursDuration | MinutesDuration | `${HoursDuration} ${MinutesDuration}`
