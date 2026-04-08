export async function getApi(location) {
  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=BALW4ZQBY7CVNQT82HNFKPEVH`,
    )
    const weatherData = await data.json()
    // return await weatherData
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

  const nextDay = []
  const dayTwo = []

  const nextDayTemp = await data.days[1].temp
  const nextDayConditions = await data.days[1].conditions

  nextDay.push(nextDayTemp, nextDayConditions)

  const dayTwoTemp = await data.days[2].temp
  const dayTwoConditions = await data.days[2].conditions

  dayTwo.push(dayTwoTemp, dayTwoConditions)



  return {
    location,
    description,
    condition,
    temp,
    nextDay,
    dayTwo
  }
}
