function randomPick(array) {
  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generateBullshit(option) {
  const task = {
    developer: ['加個按鈕','加新功能','切個版', '改一點code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    founder: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
  }
  const phrase = ['很簡單','很容易','很快','很正常']
  let str = ''
  option === Object.keys(task)[0] ? str += `身為一個工程師${randomPick(task.developer)}${randomPick(phrase)}吧!` : str
  option === Object.keys(task)[1] ? str += `身為一個設計師${randomPick(task.designer)}${randomPick(phrase)}吧!` : str
  option === Object.keys(task)[2] ? str += `身為一個創業家${randomPick(task.founder)}${randomPick(phrase)}吧!` : str
  return str
}

module.exports = generateBullshit
