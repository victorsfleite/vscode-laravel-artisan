import Common from '../../Common'

declare type FilterType = 'select' | 'boolean' | 'date'

export default class NovaFilter extends Common {

  public static async run() {

    let filterName = await this.getInput('Filter Name')
    if (filterName.length == 0) {
      this.showError('A filter name is required')
      return
    }

    let type = (await this.getListInput('What type of filter is this?', ['Select', 'Boolean', 'Date'])).toLowerCase() as FilterType
    let typeCommand = type != 'select' ? '--' + type : ''
    let command = `nova:filter ${filterName} ${typeCommand}`

    this.execCmd(command, async (info) => {
      if (info.err) {
        this.showError('Could not create the nova filter', info.err)
      } else {
        await this.openFile(info.artisan.dir, '/app/Nova/Filters/' + filterName + '.php')
      }
    })
  }
}