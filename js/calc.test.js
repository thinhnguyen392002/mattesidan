const { sum, formelk } = require("./calc");

test("adds 1 + 2 to equal 3", () => { //Texten kan vara den man vill
    expect(sum(1, 2)).toBe(3);
  });

  test("testa mellan lutningen mellan punkterna y1=2 x1=4 y2=8 x2=10", () => { //Texten kan vara den man vill
    expect(formelk(2,4,8,10)).toBe(1);
  });

  test("testa mellan lutningen mellan punkterna y1=40 x1=100 y2=120 x2=200", () => { //Texten kan vara den man vill
    expect(formelk(40,100,120,200)).toBe(0.8);
  });

  
  test("testa mellan lutningen mellan punkterna y1=20 x1=40 y2=120 x2=100", () => { //Texten kan vara den man vill
    expect(formelk(20,40,120,100)).toBe(1.6666666666666667);
  });

  test("testa mellan lutningen mellan punkterna y1=1 x1=1 y2=4 x2=2", () => { //Texten kan vara den man vill
    expect(formelk(1,1,4,2)).toBe(3);
  });

