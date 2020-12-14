export function ajaxGet(url: string, callback: any)  {
  executeTask(async () => {
    try {
        log('GET: ' + url)
        let response = await fetch(url)
        let json = await response.json()
        callback(json);
    } catch {
        log('failed to reach URL: ' + url, error)
    }
  })
}