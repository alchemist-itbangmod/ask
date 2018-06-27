// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/src/pages/404.js")),
  "component---src-pages-create-room-card-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/src/pages/CreateRoomCard.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/src/pages/index.js")),
  "component---src-pages-join-page-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/src/pages/JoinPage.js")),
  "component---src-pages-org-create-room-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/src/pages/OrgCreateRoom.js")),
  "component---src-pages-org-home-page-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/src/pages/OrgHomePage.js")),
  "component---src-pages-org-monitor-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/src/pages/OrgMonitor.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/src/pages/page-2.js")),
  "component---src-pages-pin-page-js": preferDefault(require("/Users/tinypt/Documents/Alchemist/ask/ask/src/pages/PinPage.js"))
}

exports.json = {
  "layout-index.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/404.json"),
  "create-room-card.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/create-room-card.json"),
  "index.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/index.json"),
  "join-page.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/join-page.json"),
  "org-create-room.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/org-create-room.json"),
  "org-home-page.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/org-home-page.json"),
  "org-monitor.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/org-monitor.json"),
  "page-2.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/page-2.json"),
  "pin-page.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/pin-page.json"),
  "404-html.json": require("/Users/tinypt/Documents/Alchemist/ask/ask/.cache/json/404-html.json")
}