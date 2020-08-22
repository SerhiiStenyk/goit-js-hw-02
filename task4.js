function formatString(string, maxLength = 40) {
    const normalString = string.split("");
        if (normalString.length > maxLength) {
            normalString.length = maxLength;
            return normalString.join("") + ("...");
        } else if (normalString.length = maxLength || normalString.length < maxLength) {
            return normalString.join("")
        }
  }
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
  