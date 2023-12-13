async function getData() {
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    const list = [];
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              const temp = row[1];
              list[elem] = {x: year, y: temp}
            });
    return list
    }
    //end of functions
    //call the function to test if you see the image on the left in the console
    {
}
getData();