const dateformat = (str, type) => {
  if (type === 'datetime') {
    return str.slice(0, 19).replace('T', ' ')
  }
  if (type === 'date') {
    return str.split('T')[0]
  }
}
export default {
  dateformat
}
