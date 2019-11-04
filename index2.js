
const perc = (n, t) => parseFloat(((n / t) * 100).toFixed(0))

let data = `{
  "Mafia": 467,
  "Sheriff": 38,
  "Executioner": 32,
  "Arsonist": 35,
  "Veteran": 27,
  "Vigilante": 25,
  "Transporter": 14,
  "Doctor": 31,
  "Spy": 24,
  "Witch": 41,
  "Escort": 15,
  "Serial Killer": 30,
  "Jester": 47,
  "Investigator": 31,
  "Mayor": 6,
  "Lookout": 25,
  "Bodyguard": 31,
  "Werewolf": 42,
  "Medium": 15,
  "Retributionist": 14
}`

data = `{
  "Sheriff": 38,
  "Veteran": 27,
  "Vigilante": 25,
  "Transporter": 14,
  "Doctor": 31,
  "Spy": 24,
  "Escort": 15,
  "Investigator": 31,
  "Mayor": 6,
  "Lookout": 25,
  "Bodyguard": 31,
  "Medium": 15,
  "Retributionist": 14
}`

data = JSON.parse(data)

let total = 0
for (let role in data) {
  total += data[role]
}
let arr = []
for (let role in data) {
  arr.push({
    role: role,
    exes: data[role],
    perc: perc(data[role], total)
  })
}
arr.push({ role: 'TOTAL', exes: total, perc: 100})
arr = arr.sort((a, b) => (a.exes < b.exes) ? 1 : -1)
//console.log(arr)

console.log('|Townie|Misexecutions|Percent|')
console.log('|:--|--:|--:|')
for (let i = 0; i < arr.length; i++) {
  let _ = arr[i]
  console.log(`${_.role}|${_.exes}|${_.perc}%|`)
}

data = `{
  "Mafia": 467,
  "Executioner": 32,
  "Arsonist": 35,
  "Witch": 41,
  "Serial Killer": 30,
  "Jester": 47,
  "Werewolf": 42
}`
data = JSON.parse(data)
data.Town = total
total = 0
for (let role in data) {
  total += data[role]
}
data = {
  TOTAL: total,
  Town: data.Town,
  Mafia: data.Mafia,
  Neutral: data.Executioner + data.Jester + data.Witch + data['Serial Killer'] + data.Werewolf + data.Arsonist
}
arr = []
for (let role in data) {
  arr.push({
    role: role,
    exes: data[role],
    perc: perc(data[role], total)
  })
}
arr = arr.sort((a, b) => (a.exes < b.exes) ? 1 : -1)
console.log()
//console.log(arr)
console.log('|Faction|Executions|Percent|')
console.log('|:--|--:|--:|')
for (let i = 0; i < arr.length; i++) {
  let _ = arr[i]
  console.log(`${_.role}|${_.exes}|${_.perc}%|`)
}
