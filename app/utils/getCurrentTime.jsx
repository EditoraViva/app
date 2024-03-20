export async function getCurrentTime() {
  const response = await fetch('https://worldtimeapi.org/api/ip');
  const data = await response.json();
  return new Date(data.utc_datetime);
}