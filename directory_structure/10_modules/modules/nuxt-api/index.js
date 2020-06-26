import path from 'path'
export default function(){
    this.addPlugin(path.join(__dirname, 'plugin.js'))
}