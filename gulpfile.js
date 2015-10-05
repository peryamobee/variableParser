/**
 * Created by pery on 04/10/2015.
 */
var requireDir = require('require-dir');
// Require all tasks in gulp/tasks, including subfolders
requireDir('./tasks', { recurse: true });