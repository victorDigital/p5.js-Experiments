let sn0;
let sn1;
let sn2;
let sn3;
let sn4;
let sn5;
let sn6;
let sn7;
let sn8;
let sn9;
let sn10;
let sn11;
let sn12;
let sn13;
let sn14;
let sn15;
let sn16;

let id0;
let id1;
let id2;
let id3;
let id4;
let id5;
let id6;
let id7;
let id8;
let id9;
let id10;
let id11;
let id12;
let id13;
let id14;
let id15;
let id16;

function setup() {
    textAlign(CENTER);
    createCanvas(400,400)
    sn0 = createSelect();
    sn1 = createSelect();
    sn2 = createSelect();
    sn3 = createSelect();
    sn4 = createSelect();
    sn5 = createSelect();
    sn6 = createSelect();
    sn7 = createSelect();
    sn8 = createSelect();
    sn9 = createSelect();
    sn10 = createSelect();
    sn11 = createSelect();
    sn12 = createSelect();
    sn13 = createSelect();
    sn14 = createSelect();
    sn15 = createSelect();
    sn16 = createSelect();

    sn0.position(10, 10);
    sn1.position(10, 30);
    sn2.position(10, 50);
    sn3.position(10, 70);
    sn4.position(10, 90);
    sn5.position(10, 110);
    sn6.position(10, 130);
    sn7.position(10, 150);
    sn8.position(10, 170);
    sn9.position(10, 190);
    sn10.position(10, 210);
    sn11.position(10, 230);
    sn12.position(10, 250);
    sn13.position(10, 270);
    sn14.position(10, 290);
    sn15.position(10, 310);
    sn16.position(10, 330);

    sn0.option("Bestningskammerat");
    sn1.option("Bestningskammerat");
    sn2.option("Bestningskammerat");
    sn3.option("Bestningskammerat");
    sn4.option("Bestningskammerat");
    sn5.option("Bestningskammerat");
    sn6.option("Bestningskammerat");
    sn7.option("Bestningskammerat");
    sn8.option("Bestningskammerat");
    sn9.option("Bestningskammerat");
    sn10.option("Bestningskammerat");
    sn11.option("Bestningskammerat");
    sn12.option("Bestningskammerat");
    sn13.option("Bestningskammerat");
    sn14.option("Bestningskammerat");
    sn15.option("Bestningskammerat");
    sn16.option("Bestningskammerat");
    sn0.option("Bedrager");
    sn1.option("Bedrager");
    sn2.option("Bedrager");
    sn3.option("Bedrager");
    sn4.option("Bedrager");
    sn5.option("Bedrager");
    sn6.option("Bedrager");
    sn7.option("Bedrager");
    sn8.option("Bedrager");
    sn9.option("Bedrager");
    sn10.option("Bedrager");
    sn11.option("Bedrager");
    sn12.option("Bedrager");
    sn13.option("Bedrager");
    sn14.option("Bedrager");
    sn15.option("Bedrager");
    sn16.option("Bedrager");

    id0 = createSelect();
    id1 = createSelect();
    id2 = createSelect();
    id3 = createSelect();
    id4 = createSelect();
    id5 = createSelect();
    id6 = createSelect();
    id7 = createSelect();
    id8 = createSelect();
    id9 = createSelect();
    id10 = createSelect();
    id11 = createSelect();
    id12 = createSelect();
    id13 = createSelect();
    id14 = createSelect();
    id15 = createSelect();
    id16 = createSelect();

    id0.position(160, 10);
    id1.position(160, 30);
    id2.position(160, 50);
    id3.position(160, 70);
    id4.position(160, 90);
    id5.position(160, 110);
    id6.position(160, 130);
    id7.position(160, 150);
    id8.position(160, 170);
    id9.position(160, 190);
    id10.position(160, 210);
    id11.position(160, 230);
    id12.position(160, 250);
    id13.position(160, 270);
    id14.position(160, 290);
    id15.position(160, 310);
    id16.position(160, 330);

    let ids = ["000001","000010","000011","000100","000101","000110","000111","001000","001001","001010","001011","001100","001101","001110","001111","010000","010001","010010","010011","010100","010101","010110","010111","011000","011001","011010","011011","011100","011101","011110","011111","100000","100001","100010","100011","100100","100101","100110","100111","101000","101001","101010","101011","101100","101101","101110","101111","110000","110001","110010","110011","110100","110101","110110","110111","111000","111001","111010","111011","111100","111101","111110","111111"];

    id0.option(str(ids[0]));
    id0.option(str(ids[1]));
    id0.option(str(ids[2]));

    id1.option(str(ids[3]));
    id1.option(str(ids[4]));
    id1.option(str(ids[5]));

    id2.option(str(ids[6]));
    id2.option(str(ids[7]));
    id2.option(str(ids[8]));

    id3.option(str(ids[9]));
    id3.option(str(ids[10]));
    id3.option(str(ids[11]));

    id4.option(str(ids[12]));
    id4.option(str(ids[13]));
    id4.option(str(ids[14]));

    id5.option(str(ids[15]));
    id5.option(str(ids[16]));
    id5.option(str(ids[17]));

    id6.option(str(ids[18]));
    id6.option(str(ids[19]));
    id6.option(str(ids[20]));
    id6.option(str(ids[21]));

    id7.option(str(ids[22]));
    id7.option(str(ids[23]));
    id7.option(str(ids[24]));

    id8.option(str(ids[25]));
    id8.option(str(ids[26]));
    id8.option(str(ids[27]));

    id9.option(str(ids[28]));
    id9.option(str(ids[29]));
    id9.option(str(ids[30]));

    id10.option(str(ids[31]));
    id10.option(str(ids[32]));
    id10.option(str(ids[33]));

    id11.option(str(ids[34]));
    id11.option(str(ids[35]));
    id11.option(str(ids[36]));

    id12.option(str(ids[37]));
    id12.option(str(ids[38]));
    id12.option(str(ids[39]));

    id13.option(str(ids[40]));
    id13.option(str(ids[41]));
    id13.option(str(ids[42]));

    id14.option(str(ids[43]));
    id14.option(str(ids[44]));
    id14.option(str(ids[45]));

    id15.option(str(ids[46]));
    id15.option(str(ids[47]));
    id15.option(str(ids[48]));

    id16.option(str(ids[49]));
    id16.option(str(ids[50]));
    id16.option(str(ids[51]));

}

function draw() {
}

