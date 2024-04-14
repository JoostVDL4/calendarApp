class Calendar {
  constructor(headerId, datesId, prevBtnId, nextBtnId) {
      this.header = document.getElementById(headerId);
      this.dates = document.getElementById(datesId);
      this.prevBtn = document.getElementById(prevBtnId);
      this.nextBtn = document.getElementById(nextBtnId);

      this.months = [
          "January", "February", "March", "April",
          "May", "June", "July", "August",
          "September", "October", "November", "December"
      ];

      this.date = new Date();
      this.month = this.date.getMonth();
      this.year = this.date.getFullYear();

      this.renderCalendar();

      this.prevBtn.addEventListener("click", this.prevMonth.bind(this));
      this.nextBtn.addEventListener("click", this.nextMonth.bind(this));
  }

  renderCalendar() {
      const start = new Date(this.year, this.month, 1).getDay();
      const endDate = new Date(this.year, this.month + 1, 0).getDate();
      const end = new Date(this.year, this.month, endDate).getDay();
      const endDatePrev = new Date(this.year, this.month, 0).getDate();

      let datesHtml = "";

      for (let i = start; i > 0; i--) {
          datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
      }

      for (let i = 1; i <= endDate; i++) {
          let className = i === this.date.getDate() &&
              this.month === new Date().getMonth() &&
              this.year === new Date().getFullYear() ?
              ' class="today"' : "";
          datesHtml += `<li${className}>${i}</li>`;
      }

      for (let i = end; i < 6; i++) {
          datesHtml += `<li class="inactive">${i - end + 1}</li>`;
      }

      this.dates.innerHTML = datesHtml;
      this.header.textContent = `${this.months[this.month]} ${this.year}`;
  }

  prevMonth() {
      this.month = this.month === 0 ? 11 : this.month - 1;
      this.year = this.month === 11 ? this.year - 1 : this.year;
      this.renderCalendar();
  }

  nextMonth() {
      this.month = this.month === 11 ? 0 : this.month + 1;
      this.year = this.month === 0 ? this.year + 1 : this.year;
      this.renderCalendar();
  }
}

const calendar = new Calendar("js--header", "js--dates", "js--prev", "js--next");
