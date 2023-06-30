function fuzzification(x, a, b, c) {
  let uLeft = 0;
  let uCenter = 0;
  let uRight = 0;

  const leftC = a;
  const leftD = b;
  const ctrA = a;
  const ctrB = b;
  const ctrC = c;
  const rightA = b;
  const rightB = c;

  // Fuzzification for the left trapezoid
  if (x <= leftC) {
    uLeft = 1;
  }
  if (x > leftC && x < leftD) {
    uLeft = (leftD - x) / (leftD - leftC);
  }
  if (x >= leftD) {
    uLeft = 0;
  }

  // Fuzzification for the center triangle
  if (x <= ctrA || x >= ctrC) {
    uCenter = 0;
  }
  if (x > ctrA && x < ctrB) {
    uCenter = (x - ctrA) / (ctrB - ctrA);
  }
  if (x === ctrB) {
    uCenter = 1;
  }
  if (x > ctrB && x < ctrC) {
    uCenter = (ctrC - x) / (ctrC - ctrB);
  }

  // Fuzzification for the right trapezoid
  if (x <= rightA) {
    uRight = 0;
  }
  if (x > rightA && x < rightB) {
    uRight = (x - rightA) / (rightB - rightA);
  }
  if (x >= rightB) {
    uRight = 1;
  }

  return [uLeft, uCenter, uRight];
}

function andRules(f1, f2, tempObj) {
  if (f1 >= f2) tempObj.temp = f2;
  else tempObj.temp = f1;
  if (tempObj.temp >= tempObj.conclusion) tempObj.conclusion = tempObj.temp;
}

function determineSample(a, b, c, d) {
  let s1 = [a + 10, (a + b) / 2, b];
  let s2 = [(b + c) / 2 - 10, (b + c) / 2, (b + c) / 2 + 10];
  let s3 = [c, (c + d) / 2, d - 10];

  let sample1=0, sample2=0, sample3=0;
  for (let i = 0; i < 3; i++) {
    sample1 += s1[i];
    sample2 += s2[i];
    sample3 += s3[i];
  }

  return [sample1, sample2, sample3];
}

function defuzzification(u1, u2, u3, s1, s2, s3) {
  const result =
    (u1 * s1 + u2 * s2 + u3 * s3) / (u1 * 3 + u2 * 3 + u3 * 3);

  return result.toFixed(2);
}
