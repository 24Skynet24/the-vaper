const normalDate = (e) => {
  const date = new Date(e)
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  return date.toLocaleString("ru", options)
}


export {
  normalDate
}
