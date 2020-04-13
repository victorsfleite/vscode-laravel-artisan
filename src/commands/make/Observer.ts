import Common from '../../Common'

export default class MakeObserver extends Common {

  public static async run() {

    let observerName = await this.getInput('Observer Name')
    if (observerName.length == 0) {
      this.showError('An observer name is required')
      return
    }

    let model = await this.getInput('What model should I apply this observer to?')
    let command = `make:observer ${observerName} ${model.length > 0 ? '--model=' + model : ''}`

    this.execCmd(command, async (info) => {
      if (info.err) {
        this.showError('Could not create the observer', info.err)
      } else {
        await this.openFile(info.artisan.dir, '/app/Observers/' + observerName + '.php')
      }
    })
  }
}