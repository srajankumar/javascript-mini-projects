const generateButton = document.getElementById("generate");
const passwordField = document.getElementById("password");
const input = document.getElementById("input");
const message = document.getElementById("message");
const shift = document.getElementById("shift");

let newS = "";

const generateMessage = () => {
  if (input.value === "encode") {
    return encode(message.value, parseInt(shift.value));
  } else if (input.value === "decode") {
    return decode(message.value, parseInt(shift.value));
  }
};

function encode(s, k) {
  for (let i = 0; i < s.length; ++i) {
    let val = s[i].charCodeAt(0);
    let dup = k;

    if (val + k > 122) {
      k -= 122 - val;
      k = k % 26;

      newS += String.fromCharCode(96 + k);
    } else {
      newS += String.fromCharCode(val + k);
    }

    k = dup;
  }

  return newS;
}

function decode(s, k) {
  for (let i = 0; i < s.length; ++i) {
    let val = s[i].charCodeAt(0);
    let dup = k;

    if (val - k < 97) {
      k -= val - 97;
      k = k % 26;

      newS += String.fromCharCode(123 - k);
    } else {
      newS += String.fromCharCode(val - k);
    }

    k = dup;
  }

  return newS;
}
generateButton.addEventListener("click", () => {
  passwordField.value = "";
  const newMessage = generateMessage();
  passwordField.value = newMessage;
});
