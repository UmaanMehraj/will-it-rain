
export async function getApi(){
    try{
        const data = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=BALW4ZQBY7CVNQT82HNFKPEVH')
        const weatherData = await data.json()
        console.log(weatherData)
    }
    catch(err){
        console.log(err)
    }
}
