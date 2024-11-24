async function activityTable(day) {
  let table = [];
  for (let i = 0; i < 24; i++) table[i] = 0;

  let logFileList = await textFile("camera_logs.txt");

  // Your code here
  let logFileArray = logFileList.split("\n")
  for (let file of logFileArray) {
    let timestampList = await textFile(file);
    let timestampArray = timestampList.split("\n")
    for (let timestamp of timestampArray) {
      let date = new Date(Number(timestamp));
      if (date.getDay() == day) {
        table[date.getHours()]++;
      }
    }
  }

  return table;
}

activityTable(1).then((table) => console.log(activityGraph(table)));
