export default function checkValidity(name, type) {
  if (typeof name !== "string" || name.length < 2 || name.length > 10) {
    throw new Error("Введите строку длиной от 2 до 10 символов");
  }
  if (!checkInstance(type)) {
    throw new Error("Класс не найден");
  }
  return true;
}

function checkInstance(value) {
  const classes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
  return classes.includes(value);
}
