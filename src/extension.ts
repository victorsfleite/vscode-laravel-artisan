'use strict'
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { commands, ExtensionContext, workspace, window } from 'vscode'
import TextDocumentProvider from './TextDocumentProvider'
import Common from './Common'

// Base files
import ClearCompiled from './commands/base/ClearCompiled'
import Migrate from './commands/base/Migrate'
import Optimize from './commands/base/Optimize'
import Server from './commands/base/Serve'
import List from './commands/base/List'

// Make files
import MakeAuth from './commands/make/Auth'
import MakeCommand from './commands/make/Command'
import MakeController from './commands/make/Controller'
import MakeEvent from './commands/make/Event'
import MakeFactory from './commands/make/Factory'
import MakeJob from './commands/make/Job'
import MakeListener from './commands/make/Listener'
import MakeMail from './commands/make/Mail'
import MakeMiddleware from './commands/make/Middleware'
import MakeModel from './commands/make/Model'
import MakeMigration from './commands/make/Migration'
import MakeNotification from './commands/make/Notification'
import MakeObserver from './commands/make/Observer'
import MakePolicy from './commands/make/Policy'
import MakeProvider from './commands/make/Provider'
import MakeRequest from './commands/make/Request'
import MakeResource from './commands/make/Resource'
import MakeRule from './commands/make/Rule'
import MakeSeeder from './commands/make/Seeder'
import MakeTest from './commands/make/Test'

// Migrate files
import MigrateInstall from './commands/migrate/Install'
import MigrateRefresh from './commands/migrate/Refresh'
import MigrateReset from './commands/migrate/Reset'
import MigrateRollback from './commands/migrate/Rollback'
import MigrateStatus from './commands/migrate/Status'
import MigrateFresh from './commands/migrate/Fresh'

// Nova files
import NovaResource from './commands/nova/Resource'
import NovaFilter from './commands/nova/Filter'

// Cache files
import CacheClear from './commands/cache/Clear'
import CacheTable from './commands/cache/Table'

// Route files
import RouteCache from './commands/route/Cache'
import RouteCacheClear from './commands/route/Clear'
import RouteCacheRefresh from './commands/route/Refresh'
import RouteList from './commands/route/List'

// Cache files
import ConfigCache from './commands/config/Cache'
import ConfigCacheClear from './commands/config/Clear'
import ConfigCacheRefresh from './commands/config/Refresh'

// Key files
import KeyGenerate from './commands/key/Generate'

// Event files
import EventGenerate from './commands/event/Generate'

// View files
import ViewClear from './commands/view/Clear'

import RunCommand from './commands/run/Command'

export async function activate(context: ExtensionContext) {
  let files = await workspace.findFiles('**/artisan', undefined)
  files.forEach(file => Common.artisanFileList.push(file))

  // Base commands
  context.subscriptions.push(commands.registerCommand('artisan.clearCompiled', () => { ClearCompiled.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.migrate', () => { Migrate.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.optimize', () => { Optimize.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.startServer', () => { Server.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.startServerUseDefaults', () => { Server.run(true) }))
  context.subscriptions.push(commands.registerCommand('artisan.stopServer', () => { Server.stop() }))
  context.subscriptions.push(commands.registerCommand('artisan.list', () => { List.run() }))

  // Make commands
  context.subscriptions.push(commands.registerCommand('artisan.make.auth', () => { MakeAuth.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.command', () => { MakeCommand.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.controller', () => { MakeController.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.factory', () => { MakeFactory.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.event', () => { MakeEvent.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.listener', () => { MakeListener.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.mail', () => { MakeMail.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.job', () => { MakeJob.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.middleware', () => { MakeMiddleware.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.model', () => { MakeModel.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.migration', () => { MakeMigration.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.notification', () => { MakeNotification.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.observer', () => { MakeObserver.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.policy', () => { MakePolicy.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.provider', () => { MakeProvider.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.request', () => { MakeRequest.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.resource', () => { MakeResource.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.rule', () => { MakeRule.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.seeder', () => { MakeSeeder.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.make.test', () => { MakeTest.run() }))

  // Migrate commands
  context.subscriptions.push(commands.registerCommand('artisan.migrate.install', () => { MigrateInstall.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.migrate.refresh', () => { MigrateRefresh.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.migrate.reset', () => { MigrateReset.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.migrate.rollback', () => { MigrateRollback.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.migrate.status', () => { MigrateStatus.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.migrate.fresh', () => { MigrateFresh.run() }))

  // Nova commands
  context.subscriptions.push(commands.registerCommand('artisan.nova.resource', () => { NovaResource.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.nova.filter', () => { NovaFilter.run() }))

  // Cache commands
  context.subscriptions.push(commands.registerCommand('artisan.cache.clear', () => { CacheClear.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.cache.table', () => { CacheTable.run() }))

  // Route commands
  context.subscriptions.push(commands.registerCommand('artisan.route.cache', () => { RouteCache.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.route.clear', () => { RouteCacheClear.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.route.refresh', () => { RouteCacheRefresh.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.route.list', () => { RouteList.run() }))

  // Config commands
  context.subscriptions.push(commands.registerCommand('artisan.config.cache', () => { ConfigCache.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.config.clear', () => { ConfigCacheClear.run() }))
  context.subscriptions.push(commands.registerCommand('artisan.config.refresh', () => { ConfigCacheRefresh.run() }))

  // Key commands
  context.subscriptions.push(commands.registerCommand('artisan.key.generate', () => { KeyGenerate.run() }))

  // Event commands
  context.subscriptions.push(commands.registerCommand('artisan.event.generate', () => { EventGenerate.run() }))

  // View commands
  context.subscriptions.push(commands.registerCommand('artisan.view.clear', () => { ViewClear.run() }))

  // All commands
  context.subscriptions.push(commands.registerCommand('artisan.run.command', () => { RunCommand.run() }))

  // Register document provider for virtual files
  context.subscriptions.push(workspace.registerTextDocumentContentProvider('laravel-artisan', new TextDocumentProvider()))

  console.log('Laravel Artisan: activated')
}

export function deactivate() {
  console.log('Laravel Artisan: deactivated')
  Server.stop()
}