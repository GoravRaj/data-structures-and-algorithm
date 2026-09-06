const Patterns = (
    function () {
        const pattern1 = (n = 3) => {
            console.log("Pattern - 1");
            for (let i = 0; i < n; i++) {
                let row = "";
                for (let j = 0; j < n; j++) {
                    row += "*";
                }
                console.log(row);
            }
        }

        const pattern2 = (n = 3) => {
            console.log("Pattern - 2");
            for (let i = 0; i < n; i++) {
                let row = "";
                for (let j = 0; j <= i; j++) {
                    row += "*";
                }

                console.log(row);
            }
        }

        const pattern3 = (n = 3) => {
            console.log("Pattern - 3");
            for (let i = 1; i <= n; i++) {
                let row = "";
                for (let j = 1; j <= i; j++) {
                    row += `${j}`;
                }
                console.log(row);
            }
        }

        const pattern4 = (n = 3) => {
            console.log("Pattern - 4");
            for (let i = 1; i <= n; i++) {
                let row = "";
                for (let j = 1; j <= i; j++) {
                    row += `${i}`;
                }
                console.log(row);
            }
        }

        const pattern5 = (n = 3) => {
            console.log("Pattern - 5");

            for (let i = 1; i <= n; i++) {
                let row = "";
                for (let j = 0; j < (n - i) + 1; j++) {
                    row += "*";
                }
                console.log(row);
            }
        }

        const pattern6 = (n = 3) => {
            console.log("Pattern - 6");

            for (let i = 1; i <= n; i++) {
                let row = "";
                for (let j = 1; j <= (n - i) + 1; j++) {
                    row += `${j}`;
                }
                console.log(row);
            }
        }

        const pattern7 = (n = 3) => {
            console.log("Pattern - 7");

            for (let i = 0; i < n; i++) {
                let whiteSpaceStart = "";
                let whiteSpaceEnd = "";
                let stars = "";
                for (let j = 0; j < (n - i) - 1; j++) {
                    whiteSpaceStart += " ";
                    whiteSpaceEnd += " ";
                }
                for (let j = 0; j < (2 * i) + 1; j++) {
                    stars += "*";
                }

                console.log(whiteSpaceStart + stars + whiteSpaceEnd);
            }
        }

        const pattern7_1 = (n = 3) => {

            for (let i = 0; i < n; i++) {
                let whiteSpaceStart = "";
                let whiteSpaceEnd = "";
                let stars = "";
                for (let j = 0; j < n - i - 1; j++) {
                    whiteSpaceStart += " ";
                }
                for (let j = 0; j < 2 * i + 1; j++) {
                    stars += "*";
                }

                for (let j = 0; j < n - i - 1; j++) {
                    whiteSpaceEnd += " ";
                }

                console.log(whiteSpaceStart + stars + whiteSpaceEnd);
            }
        }

        const pattern8 = (n = 3) => {
            console.log("Pattern - 8");

            for (let i = 0; i < n; i++) {
                let whiteSpaceStart = "";
                let whiteSpaceEnd = "";
                let stars = "";
                for (let j = 0; j < i; j++) {
                    whiteSpaceStart += " ";
                    whiteSpaceEnd += " ";
                }
                for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
                    stars += "*";
                }

                console.log(whiteSpaceStart + stars + whiteSpaceEnd);
            }
        }

        const pattern8_1 = (n = 3) => {

            for (let i = 0; i < n; i++) {
                let whiteSpaceStart = "";
                let whiteSpaceEnd = "";
                let stars = "";
                for (let j = 0; j < i; j++) {
                    whiteSpaceStart += " ";
                }
                for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
                    stars += "*";
                }

                for (let j = 0; j < i; j++) {
                    whiteSpaceEnd += " ";
                }

                console.log(whiteSpaceStart + stars + whiteSpaceEnd);
            }
        }

        const pattern9 = (n = 3) => {
            console.log("Pattern - 9");
            pattern7_1(n);
            pattern8_1(n);
        }

        const pattern10 = (n = 3) => {
            console.log("Pattern - 10");

            for (let i = 1; i <= (2 * n) - 1; i++) {
                let starCount = i;
                let stars = "";
                if (i > n) starCount = (2 * n) - i;
                for (let j = 1; j <= starCount; j++) {
                    stars += "*";
                }
                console.log(stars);
            }

        }

        const pattern11 = (n = 3) => {
            console.log("Pattern - 11");

            let startCount = null;
            for (let i = 0; i < n; i++) {
                let row = "";
                if (i % 2 === 0) {
                    startCount = 1;
                }
                else {
                    startCount = 0;
                }
                for (let j = 0; j <= i; j++) {
                    row += startCount;
                    startCount = 1 - startCount;
                }
                console.log(row);
            }

        }


        const pattern12 = (n = 3) => {
            console.log("Pattern - 12");
            let spaceCount = 2 * (n - 1);
            for (let i = 1; i <= n; i++) {
                let numsStart = "";
                let numsEnd = "";
                let spaces = "";
                for (let j = 1; j <= i; j++) {
                    numsStart += j;
                }

                for (let j = 1; j <= spaceCount; j++) {
                    spaces += " ";
                }


                for (let j = i; j >= 1; j--) {
                    numsEnd += j;
                }

                spaceCount -= 2;
                console.log(numsStart + spaces + numsEnd);

            }

        }

        const pattern13 = (n = 3) => {
            console.log("Pattern - 13");
            let num = 1;
            for (let i = 1; i <= n; i++) {
                const row = [];
                for (let j = 1; j <= i; j++) {
                    row.push(num);
                    num++;
                }
                console.log(row.join(" "));
            }
        };

        const pattern13Letters = (n = 3) => {
            let num = 1;
            for (let i = 1; i <= n; i++) {
                const row = [];
                for (let j = 1; j <= i; j++) {
                    row.push(String.fromCharCode(64 + num));
                    num++;
                }
                console.log(row.join(" "));
            }
        };

        const pattern14 = (n = 3) => {
            console.log("pattern - 14");
            for (let i = 1; i <= n; i++) {
                let num = 1;
                const row = [];
                for (let j = 1; j <= i; j++) {
                    row.push(String.fromCharCode(64 + num));
                    num++;
                }
                console.log(row.join(" "));
            }

        }

        const pattern15 = (n = 3) => {
            console.log("Pattern - 15");
            for (let i = 0; i < n; i++) {
                let num = 1;
                const row = [];
                for (let j = 0; j < n - i; j++) {
                    row.push(String.fromCharCode(64 + num));
                    num++;
                }

                console.log(row.join(" "));
            }
        }

        const pattern16 = (n = 3) => {
            console.log("Pattern - 16");
            let num = 1;
            for (let i = 0; i < n; i++) {
                const row = [];
                for (let j = 0; j <= i; j++) {
                    row.push(String.fromCharCode(64 + num));
                }
                num++;
                console.log(row.join(" "));
            }
        }

        const pattern16_1 = (n = 3) => {
            console.log("Pattern - 16");
            for (let i = 0; i < n; i++) {
                const letter = String.fromCharCode(65 + i);
                console.log(Array(i + 1).fill(letter).join(" "));
            }
        };

        const pattern17 = (n = 3) => {
            console.log("Pattern - 17");
            for (let i = 0; i < n; i++) {
                const whiteSpace = " ".repeat(n - i - 1);
                let alphabets = "";
                for (let j = 0; j <= 2 * i; j++) {
                    const charIndex = j <= i ? j : 2 * i - j;
                    alphabets += String.fromCharCode(65 + charIndex);
                }
                console.log(whiteSpace + alphabets + whiteSpace);
            }
        };

        const pattern18 = (n = 3) => {
            console.log("Pattern - 18");

            for (let i = 1; i <= n; i++) {
                let row = "";

                let startChar = 65 + n - i;

                for (let j = 0; j < i; j++) {
                    row += String.fromCharCode(startChar + j) + " ";
                }
                console.log(row.trimEnd());
            }
        }


        const pattern19 = (n = 3) => {
            console.log("Pattern - 19");
            // Top Half
            for (let i = 0; i < n; i++) {
                let stars = "*".repeat(n - i);
                let spaces = " ".repeat(2 * i);
                console.log(stars + spaces + stars);
            }
            // Bottom Half
            for (let i = 0; i < n; i++) {
                let stars = "*".repeat(i + 1);
                let spaces = " ".repeat(2 * (n - i - 1));
                console.log(stars + spaces + stars);
            }
        }

        const pattern19_1 = (n = 3) => {
            // Top half 
            for (let i = 0; i < n; i++) {
                let starsStart = "";
                let starsEnd = "";
                let space = "";

                for (let j = 0; j < n - i; j++) {
                    starsStart += "*";
                    starsEnd += "*";
                }

                for (let j = 0; j < 2 * i; j++) {
                    space += " ";
                }

                console.log(starsStart + space + starsEnd);
            }

            // Bottom half 
            for (let i = n - 1; i >= 0; i--) {
                let starsStart = "";
                let starsEnd = "";
                let space = "";

                for (let j = 0; j < n - i; j++) {
                    starsStart += "*";
                    starsEnd += "*";
                }

                for (let j = 0; j < 2 * i; j++) {
                    space += " ";
                }

                console.log(starsStart + space + starsEnd);
            }
        };

        const pattern20 = (n = 3) => {
            let spaces = 2 * n - 2;
            for (let i = 1; i <= 2 * n - 1; i++) {
                let stars = i <= n ? i : 2 * n - i;
                let spaceStr = " ".repeat(Math.abs(2 * (n - stars)));
                let starStr = "*".repeat(stars);

                console.log(starStr + spaceStr + starStr);
            }
        }

        const pattern20_1 = (n = 3) => {
            let totalRows = 2 * n - 1;

            for (let i = 1; i <= totalRows; i++) {
                let stars = i <= n ? i : 2 * n - i;
                let spaces = i <= n ? 2 * (n - i) : 2 * (i - n);
                let row = "";

                for (let j = 1; j <= stars; j++) {
                    row += "*";
                }

                for (let j = 1; j <= spaces; j++) {
                    row += " ";
                }

                for (let j = 1; j <= stars; j++) {
                    row += "*";
                }

                console.log(row);
            }
        }


        const pattern21 = (n = 3) => {
            console.log("Pattern - 21");
            for (let i = 0; i < n; i++) {
                if (i === 0 || i === n - 1) {
                    console.log("*".repeat(n));
                } else {
                    console.log("*" + " ".repeat(n - 2) + "*");
                }
            }
        }

        const pattern21_1 = (n = 3) => {
            for (let i = 0; i < n; i++) {
                let row = "";

                for (let j = 0; j < n; j++) {
                    let isTopRow = (i === 0);
                    let isBottomRow = (i === n - 1);
                    let isLeftColumn = (j === 0);
                    let isRightColumn = (j === n - 1);

                    if (isTopRow || isBottomRow || isLeftColumn || isRightColumn) {
                        row += "*";
                    } else {
                        row += " ";
                    }
                }

                console.log(row);
            }
        }

        const pattern22 = (n = 3) => {
            console.log("Pattern - 22");
            let size = 2 * n - 1;
            for (let i = 0; i < size; i++) {
                let row = "";
                for (let j = 0; j < size; j++) {
                    let top = i;
                    let left = j;
                    let right = (2 * n - 2) - j;
                    let bottom = (2 * n - 2) - i;

                    let val = n - Math.min(top, bottom, left, right);
                    row += val + " ";
                }
                console.log(row.trimEnd());
            }
        }

        const pattern22_1 = (n = 3) => {
            let size = 2 * n - 1;

            for (let i = 0; i < size; i++) {
                let row = "";

                for (let j = 0; j < size; j++) {
                    let distanceTop = i;
                    let distanceLeft = j;
                    let distanceBottom = (size - 1) - i;
                    let distanceRight = (size - 1) - j;

                    let minDistance = Math.min(distanceTop, distanceLeft, distanceBottom, distanceRight);

                    let value = n - minDistance;

                    row += value + " ";
                }

                console.log(row.trimEnd());
            }
        }

        return {
            pattern1,
            pattern2,
            pattern3,
            pattern4,
            pattern5,
            pattern6,
            pattern7,
            pattern8,
            pattern9,
            pattern10,
            pattern11,
            pattern12,
            pattern13,
            pattern14,
            pattern15,
            pattern16,
            pattern17,
            pattern18,
            pattern19,
            pattern20,
            pattern21,
            pattern22,
        };

    }

)();


Patterns.pattern22(5);


