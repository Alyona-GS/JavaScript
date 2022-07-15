function TicketWindow() {
  prices  = {},
  tickets = {},
  cash = 0;

  this.createEvent = function(event, price) {
    prices[event] = price
  };

  this.buyTicket = function(event) {
    var id = Math.floor(Math.random() * 900000) + 100000;

    cash += prices[event];
    tickets[id] = event;

    return id
  };

  this.returnTicket = function(id) {
    if (tickets[id]) {
      cash -= prices[tickets[id]];
      delete tickets.id;
    }
  }
}

const ticketWindow = new TicketWindow();