function alphanumeric(string){
  if (!string.length) return false;
  
  const chars = [
    // Uppercase A-Z
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
​
    // Lowercase a-z
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",
​
    // Digits 0-9
    "0","1","2","3","4","5","6","7","8","9"
  ];
​
  // create invalid chars set
  const validChars = new Set(chars);
  
  // iterate string
  for (const char of string) {
    if (!validChars.has(char)) return false;
  }
  
  return true;
}