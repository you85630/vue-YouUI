var notice = {
  primary (e) {
    let parent = document.createElement('div')
    parent.setAttribute('class', 'alert-notice')
    parent.setAttribute('id', 'alert-notice')
    document.body.appendChild(parent)
    parent.innerHTML =
      '<div class="primary"><i class="alert-remove" id="remove1">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i><span>' +
      e.title +
      '</span></p><p class="notice-desc" id="notice-desc">' +
      e.desc +
      '</p></div>'
    document.getElementById('remove1').onclick = function () {
      document.getElementById('alert-notice').remove()
    }
    if (!e.desc) {
      document.getElementById('notice-desc').remove()
    }
  },
  success (e) {
    let parent = document.createElement('div')
    parent.setAttribute('class', 'alert-notice')
    parent.setAttribute('id', 'alert-notice')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="success"><i class="alert-remove" id="remove2">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i><span>' +
      e.title +
      '</span></p><p class="notice-desc" id="notice-desc">' +
      e.desc +
      '</p></div>'
    document.getElementById('remove2').onclick = function () {
      document.getElementById('alert-notice').remove()
    }
    if (!e.desc) {
      document.getElementById('notice-desc').remove()
    }
  },
  warning (e) {
    let parent = document.createElement('div')
    parent.setAttribute('class', 'alert-notice')
    parent.setAttribute('id', 'alert-notice')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="warning"><i class="alert-remove" id="remove3">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i><span>' +
      e.title +
      '</span></p><p class="notice-desc" id="notice-desc">' +
      e.desc +
      '</p></div>'
    document.getElementById('remove3').onclick = function () {
      document.getElementById('alert-notice').remove()
    }
    if (!e.desc) {
      document.getElementById('notice-desc').remove()
    }
  },
  error (e) {
    let parent = document.createElement('div')
    parent.setAttribute('class', 'alert-notice')
    parent.setAttribute('id', 'alert-notice')
    document.body.appendChild(parent)

    parent.innerHTML =
      '<div class="error"><i class="alert-remove" id="remove4">&times;</i><p class="notice-title"><i class="fa fa-exclamation-circle"></i><span>' +
      e.title +
      '</span></p><p class="notice-desc" id="notice-desc">' +
      e.desc +
      '</p></div>'
    document.getElementById('remove4').onclick = function () {
      document.getElementById('alert-notice').remove()
    }
    if (!e.desc) {
      document.getElementById('notice-desc').remove()
    }
  }
}
export default notice
