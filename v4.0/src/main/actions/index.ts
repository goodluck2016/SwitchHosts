/**
 * index
 * @author: oldj
 * @homepage: https://oldj.net
 */

export { default as configGet } from './configGet'
export { default as configSet } from './configSet'
export { default as getDataFolder } from './getDataFolder'
export { default as getSystemHosts } from './getSystemHostsPath'
export { default as localDataRead } from './localDataRead'
export { default as localDataWrite } from './localDataWrite'
export { default as ping } from './ping'
export { default as systemHostsRead } from './systemHostsRead'
export { default as systemHostsWrite } from './systemHostsWrite'

export { default as migrateCheck } from './migrate/checkIfMigration'
export { default as migrateData } from './migrate/migrateData'
