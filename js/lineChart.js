// Ambil referensi elemen canvas
var ctx = document.getElementById("lineDistance").getContext("2d");
var ctx2 = document.getElementById("lineSpeed").getContext("2d");
var ctx3 = document.getElementById("lineControlAction").getContext("2d");

// Data untuk chart distance
var distance = {
  labels: ["50", "100", "150", "200", "250", "300", "350", "400"],
  datasets: [
    {
      label: "Dekat",
      data: [1, 1, 0],
      backgroundColor: "rgba(237, 117, 116, 0.2)", // Warna area di bawah garis
      borderColor: "rgba(237, 117, 116, 1)", // Warna garis
      borderWidth: 2, // Lebar garis
    },
    {
      label: "Sedang",
      data: [, 0, 1, 0],
      backgroundColor: "rgba(54, 162, 235, 0.2)", // Warna area di bawah garis
      borderColor: "rgba(54, 162, 235, 1)", // Warna garis
      borderWidth: 2, // Lebar garis
    },
    {
      label: "Jauh",
      data: [, , 0, 1, 1, 1, 1, 1],
      backgroundColor: "rgba(54, 218, 161, 0.2)", // Warna area di bawah garis
      borderColor: "rgba(54, 218, 161, 1)", // Warna garis
      borderWidth: 2, // Lebar garis
    },
  ],
};

// Data untuk chart distance
var speed = {
  labels: ["10", "20", "30", "40", "50", "60", "70", "80"],
  datasets: [
    {
      label: "Lambat",
      data: [1, 1, 1, 0.5, 0],
      backgroundColor: "rgba(237, 117, 116, 0.2)", // Warna area di bawah garis
      borderColor: "rgba(237, 117, 116, 1)", // Warna garis
      borderWidth: 2, // Lebar garis
    },
    {
      label: "Standar",
      data: [, , 0, 0.5, 1, 0.5, 0],
      backgroundColor: "rgba(54, 162, 235, 0.2)", // Warna area di bawah garis
      borderColor: "rgba(54, 162, 235, 1)", // Warna garis
      borderWidth: 2, // Lebar garis
    },
    {
      label: "Cepat",
      data: [, , , , 0, 0.5, 1, 1, 1],
      backgroundColor: "rgba(54, 218, 161, 0.2)", // Warna area di bawah garis
      borderColor: "rgba(54, 218, 161, 1)", // Warna garis
      borderWidth: 2, // Lebar garis
    },
  ],
};

// Data untuk chart control action
var controlAction = {
  labels: ["12,5", "25", "37,5", "50", "62,5", "75", "87,5", "100"],
  datasets: [
    {
      label: "Kurang",
      data: [1, 1, 1, 0.5, 0],
      backgroundColor: "rgba(237, 117, 116, 0.2)", // Warna area di bawah garis
      borderColor: "rgba(237, 117, 116, 1)", // Warna garis
      borderWidth: 2, // Lebar garis
    },
    {
      label: "Tahan",
      data: [, , 0, 0.5, 1, 0.5, 0],
      backgroundColor: "rgba(54, 162, 235, 0.2)", // Warna area di bawah garis
      borderColor: "rgba(54, 162, 235, 1)", // Warna garis
      borderWidth: 2, // Lebar garis
    },
    {
      label: "Tambah",
      data: [, , , , 0, 0.5, 1, 1, 1],
      backgroundColor: "rgba(54, 218, 161, 0.2)", // Warna area di bawah garis
      borderColor: "rgba(54, 218, 161, 1)", // Warna garis
      borderWidth: 2, // Lebar garis
    },
  ],
};

// Konfigurasi chart
var options = {
  responsive: true, // Mengaktifkan responsivitas
  scales: {
    y: {
      beginAtZero: true, // Mulai sumbu Y dari nol
    },
  },
};

// Inisialisasi chart
// line distance
var lineDistance = new Chart(ctx, {
  type: "line",
  data: distance,
  options: options,
});

// line speed
var lineSpeed = new Chart(ctx2, {
  type: "line",
  data: speed,
  options: options,
});

// line control action
var lineControlAction = new Chart(ctx3, {
  type: "line",
  data: controlAction,
  options: options,
});