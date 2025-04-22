const dayjs = require('dayjs')

const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

const isBetween = require("dayjs/plugin/isBetween")

console.log(dayjs().year())
console.log(dayjs().hour())
console.log(dayjs().minute())
console.log(dayjs().second())
// Time Zone
dayjs.extend(utc)
dayjs.extend(timezone)
const d1 = dayjs.tz('2025-05-21 12:00', 'America/New_York')
console.log(d1.toISOString())
// Is Before
const d2 = dayjs().isBefore(dayjs('2026-01-01'), 'month')
console.log(d2.toString())
// Is Between
dayjs.extend(isBetween)
const d3 = dayjs("2016-10-30").isBetween("2016-01-01", "2016-10-30", 'day', "[)")
console.log(d3.toString())