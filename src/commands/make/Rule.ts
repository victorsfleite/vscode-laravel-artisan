import Common from '../../Common'

export default class MakeRule extends Common {

  public static async run() {

    let ruleName = await this.getInput('Rule Name')
    if (ruleName.length == 0) {
      this.showError('A rule name is required')
      return
    }

    let command = `make:rule ${ruleName}`

    this.execCmd(command, async (info) => {
      if (info.err) {
        this.showError('Could not create the rule', info.err)
      } else {
        await this.openFile(info.artisan.dir, '/app/Rules/' + ruleName + '.php')
      }
    })
  }
}