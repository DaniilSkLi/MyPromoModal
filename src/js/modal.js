import eventManager, { default as EventManager } from './eventManager';

export default class modal {
  #config = {
    page: {
      main: "is-page",
      blur: "is-blur",
    },
    modal: {
      main: "my-promo-modal",
      visible: "my-promo-modal_visible",
    },
    loading: {
      main: "is-loading",
      load: "is-load",
      loadTimeout: 1000,
      animationTimeout: 500,
    },
  };

  #page;
  #modal;
  #loadingEls;

  #open = false;

  constructor(word) {
    this.#initializate();

    this.#modal.addEventListener("click", () => {
      if (!this.#open) return;
      this.close();
    });

    let eventManager = new EventManager(word, () => {
      if (this.#open) return;
      this.open();
    });
  }

  #initializate() {
    this.#page = document.querySelector(`.${this.#config.page.main}`);
    this.#modal = document.querySelector(`.${this.#config.modal.main}`);
    this.#loadingEls = this.#modal.querySelectorAll(`.${this.#config.loading.main}`);
  }

  open() {
    // add blur and show modal
    this.#scrollLock(true);
    this.#page.classList.add(this.#config.page.blur);
    this.#modal.classList.add(this.#config.modal.visible);

    // hide skeleton loading animation
    setTimeout(() => {
      // add class to stop loading animation
      this.#loadingEls.forEach(loadingEl => {
        loadingEl.classList.add(this.#config.loading.load);
      });

      // hide loading els
      setTimeout(() => {
        this.#loadingEls.forEach(loadingEl => {
          loadingEl.classList.remove(
            this.#config.loading.main,
            this.#config.loading.load
          );

          this.#open = true;
        });
      }, this.#config.loading.animationTimeout);

    }, this.#config.loading.loadTimeout);
  }

  close() {
    this.#page.classList.remove(this.#config.page.blur);
    this.#modal.classList.remove(this.#config.modal.visible);

    this.#scrollLock(false);
    this.#open = false;
  }

  #scrollLock(lock) {
    let overflow = lock ? "hidden" : "auto";
    document.body.style.overflow = overflow;
  }
}