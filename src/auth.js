/**
 * Created by jmh.
 * Date: 2018/10/10
 * Time: 15:33
 */

var loggedIn = function () {
  var userId = localStorage.getItem('cmuserid')
  if(userId) return true
  return false
}

export default {
  loggedIn
}
