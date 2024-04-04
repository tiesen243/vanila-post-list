export const counter = (ele: HTMLButtonElement) => {
  let count = 0
  ele.addEventListener('click', function () {
    count += 1
    this.innerHTML = `Counter: ${count}`
  })
}
