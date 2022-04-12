export default class eventManager {
  #word;
  #callback;

  constructor(needWord, callback) {
    this.#word = needWord;
    this.#callback = callback;

    let word = "";
    window.addEventListener("keyup", (e) => {
      if (!this.#lettersOnly(e))
        return;

      word += e.key;

      if (!this.#checkWord(word))
        return;

      this.#callback();
      word = "";
    });
  }

  #lettersOnly(e) {
    let charCode = e.keyCode;

    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
      return true;
    else
      return false;
  }

  #checkWord(word) {
    if (word.toLowerCase() === this.#word.toLowerCase())
      return true;
    return false;
  }
}