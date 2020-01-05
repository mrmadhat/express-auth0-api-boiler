const { project } = require("../../config")

module.exports = err => {
  const easyStack = err.stack.split("    ").splice(1)

  easyStack.forEach((str, ind) => {
    const startCut = str.indexOf("/")

    const searchStr = project.dir
    let cutInd = str.indexOf(searchStr)

    if (cutInd >= 0) cutInd += searchStr.length

    const toRemove = str.slice(startCut, cutInd)

    easyStack[ind] = str.replace(toRemove, "")
  })
  console.log("===")
  console.log("ERROR", easyStack[0].replace("\n", ""))
  console.log("---")
  console.log("MESSAGE:", err.message)
  console.log("---")
  console.log("STACK:")
  console.log("...." + easyStack.join("...."))
  console.log("===")
}
