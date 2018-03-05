var notice = {
  primary (e) {
    let parent = document.createElement('div')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="alert-notice primary"><i class="alert-remove" onclick="alertRemove()">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i>' +
      e.title +
      '</p><p class="notice-desc">' +
      e.desc +
      '</p></div>'
  },
  success (e) {
    let parent = document.createElement('div')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="alert-notice success"><i class="alert-remove" onclick="alertRemove()">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i>' +
      e.title +
      '</p><p class="notice-desc">' +
      e.desc +
      '</p></div>'
  },
  warning (e) {
    let parent = document.createElement('div')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="alert-notice warning"><i class="alert-remove" onclick="alertRemove()">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i>' +
      e.title +
      '</p><p class="notice-desc">' +
      e.desc +
      '</p></div>'
  },
  error (e) {
    let parent = document.createElement('div')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="alert-notice error"><i class="alert-remove" onclick="alertRemove()">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i>' +
      e.title +
      '</p><p class="notice-desc">' +
      e.desc +
      '</p></div>'
  }
}
export default notice
