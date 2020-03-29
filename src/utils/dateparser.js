import dayjs from "dayjs"

const parseDate = (datestring) => {
  const utcDateTime = dayjs(datestring)
  return utcDateTime.format(`h:mm A, D MMM YYYY`)
}

export default parseDate
