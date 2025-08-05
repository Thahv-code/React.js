const users = [
  { name: "Nguyễn A", weather: "sunny" },
  { name: "Trần B", weather: "rainny" },
];
users.forEach((u) => {
  if (u.weather === "sunny") {
    console.log(`Chào ${u.name}! Hôm nay trời nắng tuyệt vời!`);
  } else if (u.weather === "rainny") {
    console.log(`Chào ${u.name}! Hôm nay trời mưa, hãy mang theo ô!`);
  } else {
    console.log(
      `Chào ${u.name}!Hôm nay thời tiết không xác định.`);
  }
});
