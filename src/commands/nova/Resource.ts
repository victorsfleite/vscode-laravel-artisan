import Common from '../../Common'

export default class NovaResource extends Common {

  public static async run() {

    let resourceName = await this.getInput('Resource Name')
    if (resourceName.length == 0) {
      this.showError('A resource name is required')
      return
    }

    let model = await this.getInput('What model should I correspond this resource to?')
    let command = `nova:resource ${resourceName} ${model.length > 0 ? '--model=' + model : ''}`

    this.execCmd(command, async (info) => {
      if (info.err) {
        this.showError('Could not create the observer', info.err)
      } else {
        await this.openFile(info.artisan.dir, '/app/Nova/' + resourceName + '.php')
      }
    })
  }
}