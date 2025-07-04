// Format input datetime to ISO 8601 with local timezone offset.
export function formatDatetime(inputDatetime) {
  // If inputDatetime is not provided, return undefined.
  if (!inputDatetime) return undefined;

  // Create date object and set seconds to zero.
  const date = new Date(inputDatetime);
  date.setSeconds(0, 0);

  // Pad value to 2-digits string.
  const pad = (value) => String(value).padStart(2, '0');

  // Get datetime from inputDatetime.
  const year = String(date.getFullYear());
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  const second = pad(date.getSeconds());

  // Set datetime format.
  const datetime = `${year}-${month}-${day}T${hour}:${minute}:${second}`;

  // Get timezone offset from inputDatetime.
  const offset = -date.getTimezoneOffset();
  const offsetSign = offset >= 0 ? '+' : '-';
  const absOffset = Math.abs(offset);
  const offsetHour = pad(Math.floor(absOffset / 60));
  const offsetMinute = pad(absOffset % 60);

  // Set timezone format.
  const timezone = `${offsetSign}${offsetHour}:${offsetMinute}`;

  return `${datetime}${timezone}`;
}
