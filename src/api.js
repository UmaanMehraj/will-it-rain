export async function getApi(location) {
  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BALW4ZQBY7CVNQT82HNFKPEVH`,
    )
    const weatherData = await data.json()
    return provideData(weatherData)
  } catch (err) {
    console.log(err)
  }
}

export async function provideData(data) {
  const location = await data.address
  const description = await data.description
  const condition = await data.currentConditions.conditions
  const temp = await data.currentConditions.temp

  return {
    location,
    description,
    condition,
    temp,
  }
}
