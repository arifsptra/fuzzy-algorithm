function handleSubmit(event) {
  event.preventDefault(); // Menghentikan submit form untuk mencegah refresh halaman

  const iDistance = document.getElementById("inputDistance").value;
  const iSpeed = document.getElementById("inputSpeed").value;

  // Fuzzification of distance (jarak)
  const [uDekat, uSedang, uJauh] = fuzzification(iDistance, 100, 150, 200);

  const oDekat = document.getElementById("outputDekat");
  const oSedang = document.getElementById("outputSedang");
  const oJauh = document.getElementById("outputJauh");

  oDekat.value = uDekat;
  oSedang.value = uSedang;
  oJauh.value = uJauh;

  // Fuzzification of speed (kecepatan)
  const [uLambat, uStandar, uCepat] = fuzzification(iSpeed, 30, 50, 70);

  const oLambat = document.getElementById("outputLambat");
  const oStandar = document.getElementById("outputStandar");
  const oCepat = document.getElementById("outputCepat");

  oLambat.value = uLambat;
  oStandar.value = uStandar;
  oCepat.value = uCepat;

  // Applying rules to determine the conclusion
  let kurangObj = { temp: 0, conclusion: 0 };
  let tahanObj = { temp: 0, conclusion: 0 };
  let tambahObj = { temp: 0, conclusion: 0 };
  andRules(uDekat, uLambat, tahanObj);
  andRules(uDekat, uStandar, kurangObj);
  andRules(uDekat, uCepat, kurangObj);
  andRules(uSedang, uLambat, tambahObj);
  andRules(uSedang, uStandar, tahanObj);
  andRules(uSedang, uCepat, kurangObj);
  andRules(uJauh, uLambat, tambahObj);
  andRules(uJauh, uStandar, tahanObj);
  andRules(uJauh, uCepat, tahanObj);

  const oKurang = document.getElementById("outputKurang");
  const oTahan = document.getElementById("outputTahan");
  const oTambah = document.getElementById("outputTambah");

  oKurang.value = kurangObj.conclusion;
  oTahan.value = tahanObj.conclusion;
  oTambah.value = tambahObj.conclusion;

  // Determining the sample values for defuzzification
  const [sample1, sample2, sample3] = determineSample(0, 25, 75, 100);

  const oSample1 = document.getElementById("outputSample1");
  const oSample2 = document.getElementById("outputSample2");
  const oSample3 = document.getElementById("outputSample3");

  oSample1.value = sample1;
  oSample2.value = sample2;
  oSample3.value = sample3;

  // Defuzzification to calculate the reward
  const reward = defuzzification(
    kurangObj.conclusion,
    tahanObj.conclusion,
    tambahObj.conclusion,
    sample1,
    sample2,
    sample3
  );

  const oReward = document.getElementById("outputReward");

  oReward.value = reward;
}
