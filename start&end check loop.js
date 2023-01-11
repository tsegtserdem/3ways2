let data = {
    "success": "true",
    "water1": [
        [
            [
                "2022",
                "1",
                "1",
                "1",
                "-5.143596"
            ]
        ]
        [
        [
            "2022",
            "1",
            "1",
            "1",
            "-5.143596"
        ]
        ]
    ],
    "water2": [
        [
            [
                "2022",
                "1",
                "1",
                "1",
                "-5.143596"
            ]
        ]
        [
        [
            "2022",
            "1",
            "1",
            "1",
            "-5.143596"
        ]
        ]
    ]
}

let checker;
for (let q = 0; q < data.water1.length; q++) {
    for (let i = 0; i < data.water1[q].length; i++) {
        // console.log(data.water1[i]);
        // console.warn("LOOP :", i)
        let temp = data.water1[q][i];
        // console.log("TEMP:",temp);
        if (temp[0] * 1 == Gyear && temp[1] * 1 == Gmonth && temp[2] * 1 == Gday)
            checker = 1;
        if (checker == 1) {
            // console.log("/drawing");
            x.push(`${temp[1]}-${temp[2]}`);
            y1.push(data.water1[q][i][4]);
            // y2.push(data.water2[q][i][4]);
            // y3.push(data.water3[q][i][4]);
            // y4.push(data.water4[q][i][4]);
        }
        if (temp[0] * 1 == GyearEnd && temp[1] * 1 == GmonthEnd && temp[2] * 1 == GdayEnd)
            checker = 0;

        // console.log("/");
    }
}